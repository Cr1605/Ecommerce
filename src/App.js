import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Testimonial from "./components/testimonial/Testimonial";
import Virtual from "./components/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
    </div>
  );
}

export default App;
