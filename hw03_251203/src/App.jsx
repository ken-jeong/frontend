// App.jsx
import { Fragment } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Interest from "./components/Interest";
import Ajax from "./components/Ajax";
import Digital from "./components/Digital";
import Culture from "./components/Culture";

import "./styles/App.css";

const App = () => {
    return (
        <Fragment>
            <Header title="Frontend Programming Homework" />
            <HashRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/interest" element={<Interest />} />
                    <Route path="/analysis" element={<Ajax />} />
                    <Route path="/digital" element={<Digital />} />
                    <Route path="/culture" element={<Culture />} />
                </Routes>
            </HashRouter>
            <Footer />
        </Fragment>
    );
};

export default App;
