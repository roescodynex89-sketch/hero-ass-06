import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./assets/components/Banner";
import BannerMini from "./assets/components/BannerMini";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer1 from "./assets/components/Footer1";
import Footer2 from "./assets/components/Footer2";
import Footer3 from "./assets/components/Footer3";
import Footer4 from "./assets/components/Footer4";

const ProductPromise = fetch("/Products.json").then((res) => res.json());

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error("Item removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    setShowCart(false); 
    toast.info("Thank you for your purchase!");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <Navbar cartCount={cart.length}></Navbar>

      <Banner></Banner>

      <BannerMini></BannerMini>

      <Suspense fallback={<p>Loading...</p>}>
        <Card
          ProductPromise={ProductPromise}
          cart={cart}
          showCart={showCart}
          setShowCart={setShowCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </Suspense>
      <Footer1></Footer1>
      <Footer2></Footer2>
      <Footer3></Footer3>
      <Footer4></Footer4>
    </>
  );
}

export default App;
