import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SpeechProvider appId="d78ca30c-3f50-4532-b462-def910de0f00" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
);
// {
//   /* <React.StrictMode>
// </React.StrictMode> */
// }
