import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

import { Bkground } from "./components/Bkground/Bkground";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/home";
import { UsInfo } from "./components/UsInfo/usInfo";
import { Projects } from "./components/Projects/projects";
//import { Products } from "./components/eCommers/ItemListContainer/ItemListContainer";
import { ItemListContainer } from "./components/eCommers/ItemListContainer/ItemListContainer";
import { Contact } from "./components/Contact/contact";
import { CartShop } from "./components/eCommers/CartShop/cartShop";
import { FootPage } from "./components/FootPage/FootPage";
import { Test } from "./components/test/test";

import { ItemDetailContainer } from "./components/eCommers/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
        {/* <Bkground /> */}
      <BrowserRouter>
       
        <NavBar />
      
        <Routes>
          <Route path="/" element={ <Home/> }  />
          <Route path="/nosotros" element={ <UsInfo/> }  />
          <Route path="/proyectos" element={ <Projects/> }  />
          <Route path="/productos" element={ <ItemListContainer/> }  />
          <Route path="/contacto" element={ <Contact/> }  />
          <Route path="/carrito" element={ <CartShop/> }  />

          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/detalle/:productId" element={<ItemDetailContainer/>} />
          <Route path="*" element={ <Navigate to = {"/"}/>} />


        </Routes>
        
        <FootPage /> 
      
      </BrowserRouter>

    </div>
  );
}

export default App;

 