import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Components/ContactUs/ContactUs";

/*  "homepage": "file:///mnt/Bibliotheque/Programing/Projects/React/yit-web/build/",*/
function Landing() {
    return (
        <BrowserRouter>
            <Home/>
            <AboutUs/>
            <Services/>
            <ContactUs></ContactUs>
        </BrowserRouter>
    );
}

export default Landing;
