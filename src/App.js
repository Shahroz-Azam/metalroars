import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container'
  // import Swiper JS
import Swiper from 'swiper';
  // import Swiper styles
import 'swiper/css';
import "swiper/css/bundle";



import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Homepage from './pages/Home'
import Marketplace from "./pages/MarketPlace.js";

function App() {
  return (

    <Router>
      <div className="App">
        <Container fluid className="headerContainer">
          <Header />
        </Container>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/marketplace" element={<Marketplace />}></Route>
        </Routes>
        <Container fluid className="footerContainer">
          <Footer/>
        </Container>
      </div>
    </Router>
  );
}

export default App;


