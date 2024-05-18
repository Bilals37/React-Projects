import Navbar from "./Components/Navebar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Loginpop from "./Components/Login-Popup/LoginPopup";
import AboutUs from "./Pages/About/AboutUs";
import Contact from "./Pages/ContactUs/Contact";


function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <Loginpop setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <BrowserRouter>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/aboutus' element={<AboutUs />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/order' element={<PlaceOrder />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>

    </>
  );
}

export default App;
