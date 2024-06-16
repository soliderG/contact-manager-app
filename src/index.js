import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import App from "./App";

import "./index.css";
import "react-confirm-alert/src/react-confirm-alert.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);
