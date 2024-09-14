import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import ReactDom from 'react-dom/client';
import App from "./App";

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
