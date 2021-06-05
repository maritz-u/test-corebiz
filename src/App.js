import "./App.css";
import Carousel from "./components/carousel.js";
import Banner from "./img/Banner.jpg";
import Header from "./components/header.js";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
      <img src={Banner} className="App-Banner" alt="Banner" />
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
