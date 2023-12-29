import { Route, Routes } from 'react-router-dom';
import SiwePage from './pages/siwe'; // Import the SiwePage component

const App = () => {
	return (
		<Routes>
			<Route path="/siwe" element={<SiwePage />} />
			<Route path="/email-login"></Route>
			<Route path="/email-signup" element></Route>
			{/* Other routes... */}
		</Routes>
	);
};

export default App;
