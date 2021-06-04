import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url =
    "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products";
  const [data, setData] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = response.json();
    setData(responseJSON);
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
