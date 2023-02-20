import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPages";
import Basket from "./pages/Basket";
import Products from "./pages/Products";
import User from "./pages/user";
import { useState } from "react";
import { BasketProvider } from "./context/basketcontext";




function App() {
  
  const [counter,setCounter]=useState(0)

  return (
    <BrowserRouter>
     <BasketProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home />} />
          <Route path="about"  element={<About />}  />
          <Route path="contact" element={<Contact />} />
          <Route path="products"  element={<Products />} />
          <Route path="basket"  element={<Basket />} />
          <Route path="/product/:id" element={<User />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
     </BasketProvider>
    </BrowserRouter>
  );
}

export default App;
