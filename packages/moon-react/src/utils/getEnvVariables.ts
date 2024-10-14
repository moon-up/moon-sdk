// type EnvVariables = {
//   responseType: string;
//   clientId: string;
//   redirectUri: string;
//   scope: string;
//   state: string;
// };

// const getEnvVariables = (): EnvVariables | undefined => {
//   const responseType =
//     (typeof import.meta.env !== "undefined" &&
//       import.meta.env.VITE_APP_RESPONSE_TYPE) ||
//     (typeof process !== "undefined" && process?.env?.REACT_APP_RESPONSE_TYPE);

//   const clientId =
//     (typeof import.meta.env !== "undefined" &&
//       import.meta.env.VITE_APP_CLIENT_ID) ||
//     (typeof process !== "undefined" && process?.env?.REACT_APP_CLIENT_ID);

//   const redirectUri =
//     (typeof import.meta.env !== "undefined" &&
//       import.meta.env.VITE_APP_REDIRECT_URI) ||
//     (typeof process !== "undefined" && process?.env?.REACT_APP_REDIRECT_URI);

//   const scope =
//     (typeof import.meta.env !== "undefined" &&
//       import.meta.env.VITE_APP_SCOPE) ||
//     (typeof process !== "undefined" && process?.env?.REACT_APP_SCOPE);

//   const state =
//     (typeof import.meta.env !== "undefined" &&
//       import.meta.env.VITE_APP_STATE) ||
//     (typeof process !== "undefined" && process?.env?.REACT_APP_STATE);

//   if (!responseType || !clientId || !redirectUri || !scope || !state) {
//     const missingVariables = [
//       !responseType && "RESPONSE_TYPE",
//       !clientId && "CLIENT_ID",
//       !redirectUri && "REDIRECT_URI",
//       !scope && "SCOPE",
//       !state && "STATE",
//     ]
//       .filter(Boolean)
//       .join(", ");

//     const errorMessage = `Missing environment variables (VITE_APP_  or  REACT_APP_): ${missingVariables}`;
//     console.warn(errorMessage);
//     // return undefined;
//   }

//   return {
//     responseType,
//     clientId,
//     redirectUri,
//     scope,
//     state,
//   };
// };

// export default getEnvVariables;
