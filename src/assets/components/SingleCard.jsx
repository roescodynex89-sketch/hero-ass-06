import { FaCheck } from "react-icons/fa";

const SingleCard = ({ product, addToCart, cart }) => {
  const isSelected = cart?.some((item) => item.id === product.id);

  const getTagStyles = (type) => {
    switch (type?.toLowerCase()) {
      case "best seller":
        return "bg-orange-100 text-orange-600";
      case "new":
        return "bg-green-100 text-green-600";
      case "popular":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-300 flex flex-col relative hover:shadow-2xl transition-all duration-300 h-full">
      {product.tag && (
        <div className="absolute top-6 right-6">
          <span
            className={`text-[11px] font-black uppercase px-3 py-1.5 rounded-full ${getTagStyles(product.tagType)}`}
          >
            {product.tag}
          </span>
        </div>
      )}

      <div className="mb-6 bg-[#FFFFFF] border border-gray-200 w-16 h-16 flex items-center justify-center rounded-full">
        <img
          src={product.icon}
          alt={product.name}
          className="w-8 h-8 object-contain"
        />
      </div>

      <div className="text-left flex flex-col ">
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-500 text-sm mb-6 min-h-10">
          {product.description}
        </p>
        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-4xl font-semibold">${product.price}</span>
          <span className="text-gray-400 text-sm capitalize">
            /{product.period}
          </span>
        </div>
        <div className="space-y-4 mb-10">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="text-green-500 text-[12px] mt-1" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => addToCart(product)}
        disabled={isSelected}
        className={`w-full px-6 py-3 rounded-3xl font-semibold transition-all 
        ${
          isSelected
            ? "bg-green-100 text-green-600 cursor-not-allowed"
            : "bg-[#2563EB] text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg active:scale-95"
        }`}
      >
        {isSelected ? "✓ Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default SingleCard;
