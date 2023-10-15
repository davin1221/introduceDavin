import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import TopBtn from "./components/TopBtn";



function App() {

  return (
    <BrowserRouter>
      <div className="App">

       

        {/* <Routes>
          <Route path="/" />
          <Route path="/letsvegan" element={<LetsVegan/>}/>
        </Routes> */}

        

        <Nav />
        
        <Intro />

        <About />

        <Skills />

        <Portfolio />

        <Contact />

        <TopBtn />
      </div>
    </BrowserRouter>
  );
}

export default App;

<div className="intro_img">
  <img src={process.env.PUBLIC_URL + "/img/img_1.jpg"} />
</div>;
