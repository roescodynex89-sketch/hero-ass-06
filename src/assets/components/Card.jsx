import React, { use } from "react";
import SingleCard from "./SingleCard";
import Cart from "./Cart";

const Card = ({
  ProductPromise,
  cart,
  showCart,
  setShowCart,
  addToCart,
  removeFromCart,
  clearCart,
}) => {
  const products = use(ProductPromise);

  return (
    <>
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Premium Digital Tools
        </h1>
        <p className="max-w-2xl text-gray-500 text-xl mb-10">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex bg-[#F3F4F6] p-1.5 rounded-full border border-gray-200">
          <button
            onClick={() => setShowCart(false)}
            className={`px-10 py-2.5 rounded-3xl text-sm font-semibold transition-all
            ${!showCart ? "bg-[#2563EB] text-white shadow-md" : "text-gray-700 hover:text-blue-600"}`}
          >
            Products
          </button>

          <button
            onClick={() => setShowCart(true)}
            className={`px-10 py-2.5 rounded-3xl text-sm font-semibold transition-all
            ${showCart ? "bg-[#2563EB] text-white shadow-md" : "text-gray-700 hover:text-blue-600"}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </section>

      {showCart ? (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      ) : (
        <section className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <SingleCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              cart={cart}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Card;
