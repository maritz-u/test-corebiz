import { useEffect } from "react";
import "./App.css";
import data from "./data.js";

function App() {
  const url =
    "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products";
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        <p>Holi</p>
      </header>
    </div>
  );
}

export default App;
