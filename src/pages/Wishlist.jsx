import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { items } = useWishlist();

  return (
    <main className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-10">
          <Heart size={28} className="text-red-400 fill-red-400" />
          <h1 className="font-display text-4xl font-semibold text-stone-900">Wishlist</h1>
          <span className="bg-stone-200 text-stone-600 px-3 py-1 rounded-full text-sm font-body">
            {items.length} items
          </span>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <Heart size={40} className="text-stone-300" />
            </div>
            <p className="font-display text-2xl text-stone-600 mb-2">Your wishlist is empty</p>
            <p className="font-body text-stone-400 mb-8">Save items you love for later</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white font-body font-medium rounded-full hover:bg-stone-700 transition-colors text-sm"
            >
              Browse Products <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 80} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
