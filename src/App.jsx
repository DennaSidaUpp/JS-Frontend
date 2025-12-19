import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/contact" element={<ContactUs />}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App