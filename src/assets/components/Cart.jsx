
import React from "react";

const Cart = ({ cart, removeFromCart, clearCart }) => {

  const total = cart?.reduce((sum, item) => sum + item.price, 0) ;

  return (
    <section className="max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-sm border mt-10">
      <h2 className="text-xl font-bold mb-6">Your Cart</h2>
      
      {cart?.length === 0 ? (
        <div className="text-center py-10">
            <p className="text-gray-400">Cart is empty</p>
        </div>
      ) : (
        <div className="space-y-3">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 border border-gray-100">
                    <img src={item.icon} className="w-full object-contain" alt={item.name} />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500 font-medium">${item.price}</p>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => removeFromCart(item.id)} 
                className="text-red-400 hover:text-red-600 font-bold text-sm transition-colors px-3 py-1"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center py-6 border-t mt-4 border-dashed">
            <span className="text-gray-500 font-medium">Total</span>
            <span className="text-2xl font-black text-gray-900">${total}</span>
          </div>

          <button 
            type="button"
            onClick={clearCart} 
            className="w-full bg-[#6366F1] text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-600 transition-all active:scale-[0.98]"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;