import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();
  const { toggle, isWished } = useWishlist();
  const wished = isWished(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, product.sizes[0], selectedColor);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggle(product);
  };

  return (
    <div
      className="group animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div
          className="relative overflow-hidden rounded-2xl bg-stone-100 aspect-[3/4]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={hovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-medium rounded-full font-body ${
              product.badge === "Sale"
                ? "bg-red-400 text-white"
                : product.badge === "New"
                ? "bg-stone-800 text-white"
                : "bg-sand-400 text-white"
            }`}>
              {product.badge}
            </span>
          )}

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
              wished
                ? "bg-red-50 text-red-400"
                : "bg-white/90 text-stone-400 hover:text-red-400 opacity-0 group-hover:opacity-100"
            }`}
          >
            <Heart size={16} fill={wished ? "currentColor" : "none"} />
          </button>

          {/* Quick Add */}
          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-transform duration-300 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}>
            <button
              onClick={handleAddToCart}
              className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-stone-800 font-body text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-stone-800 hover:text-white transition-colors duration-200 shadow-lg"
            >
              <ShoppingBag size={15} />
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3 px-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-body font-medium text-stone-800 text-sm leading-snug group-hover:text-sand-600 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star size={12} className="text-sand-400 fill-sand-400" />
              <span className="text-xs text-stone-500 font-body">{product.rating}</span>
            </div>
          </div>

          {/* Colors */}
          <div className="flex items-center gap-1.5 mt-1.5">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={(e) => { e.preventDefault(); setSelectedColor(c); }}
                className={`w-4 h-4 rounded-full border-2 transition-transform ${
                  selectedColor === c ? "border-stone-700 scale-110" : "border-stone-200 hover:border-stone-400"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1.5">
            <span className="font-display font-semibold text-stone-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-stone-400 text-sm line-through font-body">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
