import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Components/Footer";




function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
            <Header/>
            <Home/>
            <AboutUs/>
            <Services/>
            <Portfolio/>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
