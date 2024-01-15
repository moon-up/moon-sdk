import cors from 'cors';
import express, { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as solc from 'solc';

// Create a new express application instance
const app: express.Application = express();

// Use body-parser middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/compile', async (req: Request, res: Response) => {
  try {
    let { name, content } = req.body;
    const parsedName = name || 'MyContract';

    let input = {
      language: 'Solidity',
      sources: {
        'MyContract.sol': {
          content: content,
        },
        // add
      },
      settings: {
        evmVersion: 'paris',

        optimizer: {
          enabled: true,
          runs: 800,
        },

        outputSelection: {
          '*': {
            '*': ['abi', 'evm.bytecode'],
          },
        },
      },
    };
    // console.log(response.toDict().data.content.replace(/\\n/gim, '\n'));
    const addSourcesFromDirectory = (dirPath: string) => {
      const files = fs.readdirSync(dirPath);
      console.log(files);
      for (const file of files) {
        console.log(file);
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          addSourcesFromDirectory(filePath);
        } else if (path.extname(file) === '.sol') {
          const content = fs.readFileSync(filePath, 'utf8');
          const relativePath = path.relative(__dirname, filePath);
          input.sources[
            relativePath.replace(/^.*\/node_modules\//, '') as keyof typeof input.sources
          ] = {
            content,
          };
        }
      }
    };

    addSourcesFromDirectory(path.join(__dirname, '../node_modules/@openzeppelin/contracts'));
    // console.log(input);

    const output = JSON.parse(solc.compile(JSON.stringify(input)));
    console.log(output);
    console.log(output.contracts['MyContract.sol']);
    console.log(JSON.stringify(output.contracts['MyContract.sol'][parsedName], null, 2));
    const bytecode = output.contracts['MyContract.sol'][parsedName].evm.bytecode.object;
    const abi = output.contracts['MyContract.sol'][parsedName].abi;

    return res.status(200).json({
      success: true,
      abi: abi,
      bytecode: bytecode,
    });
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({
      error: 'Server error. Try again with a different prompt.',
      success: false,
    });
  }
});

const PORT = process.env.PORT ? parseInt(process.env.NODE_PORT || '') : 4000;
// Serve the application at the given port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
