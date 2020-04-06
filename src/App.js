import React from "react";
import "./App.css";
import Store from "./Components/Store";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Context";
function App() {
  return (
    <ProductProvider>
      <Router>
        <Store />
      </Router>
    </ProductProvider>
  );
}

export default App;
