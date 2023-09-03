import Navpar from "./components/Navpar";
import Footer from "./components/Footer";
import Store from "./hooks/Store";
import Cart from "./hooks/Cart";
import Singin from "./hooks/Singin";
import SingUp from "./hooks/SingUp";
import Moreitem from "./pages/Moreitem";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navpar />
      <div className="bg-slate-50 flex text-black gap-5 font-bold py-2 pl-4">
        <a href="/">All</a> <p>Todays Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>sell</p>
      </div>

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/Item:id" element={<Moreitem />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Singin" element={<Singin />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
