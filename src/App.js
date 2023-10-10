import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      

      <Routes>
        {/* <Route path="/" element={<Intro />} /> */}
      </Routes>






      <Nav />
      
      <div className='intro intro_full wrapper'>

         <div className='container'>
               djd?D
         </div>
        
      </div>



    </div>
    </BrowserRouter>
  );
}

export default App;


<div className='intro_img'>
          <img src={process.env.PUBLIC_URL + "/img/img_1.jpg"}/>
        </div>