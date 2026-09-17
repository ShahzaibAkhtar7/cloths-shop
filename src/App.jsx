import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <CartSidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
