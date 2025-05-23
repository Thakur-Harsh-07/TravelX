import Hero from "./Components/Home";

import "./App.css"
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Destinations from "./Components/Destination";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonial from "./Components/Testomonial";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar/>
      <Routes>
        <Route path = "/" element ={
          <>
           <Hero/>
           <Destinations/>
           <WhyChooseUs/>
           <Testimonial/>
          </>
        }/>
        <Route path = "/about" element ={<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

