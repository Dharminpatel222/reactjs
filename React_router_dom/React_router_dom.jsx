import React from "react";

import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Header from "./Componet/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Productdetails from "./Pages/Productdetails";
import Cocktail from "./Pages/Cocktail";
import Cocktailsdetails from "./Pages/Cocktailsdetails";
import PrivateRoute from "./Pages/PrivateRoute";

export default function React_router_dom() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/Home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/Gallery" element={<Gallery />} >
          </Route>
          <Route path="/Product" element={<Product />} />
          <Route path="/Cocktail-drink" element={<Cocktail />} />
          <Route
            path="/Cocktail-drink/:cocktailID"
            element={<Cocktailsdetails />}
          />
          <Route path="/product/:id" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
