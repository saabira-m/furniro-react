import React, { useState } from "react";
import Bioinfo from "./components/Bioinfo";
import Movieticket from "./components/Movieticket";
import Anime from "./components/anime";
import Seasons from "./components/Seasons";
import Mobile from "./components/Mobile";
import Showlist from "./components/Showlist";
import "./App.css";
import ProductApi from "./components/ProductApi";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


// function App(){
//   // const[data,setdata]=useState(["luffy","zoro","sanji","nami","ussop","jimbe","chopper"])
//   return(
//     <div>
//     {/* <h1>  SAABIRA 
//     </h1>
//     <h2>AGE:20</h2> */}

//       {/* <Bioinfo /> */}
//     {/* <Movieticket />
//     <Anime />
//     <Seasons />
//     <Mobile /> */}
//     {/* <Showlist /> */}
//     {/* <Bioinfo name="Saabi"  />
//     <Bioinfo name="Rm" age={28} /> */}
//     {/* 
//       {data.map((na)=>(
//         <div>
//           <Bioinfo name={na} />
//           </div>
//       ))} */}

    
//        {/* <ProductApi /> */}

//     </div>


    
//   )
// }

// export default App


export default function App(){
  return(
    <BrowserRouter>
      <Home/>
      <Product/>
      <About/>

     <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Product</Link>
      <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route element={<Home/>}path='/' />
        <Route element={<Product/>}path='/products' />
        <Route element={<About/>}path='/about' />
      </Routes>

    </BrowserRouter>
  )
}