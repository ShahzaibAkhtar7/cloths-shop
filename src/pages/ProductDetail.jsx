import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, ShoppingBag, Truck, RefreshCw, ChevronDown, ArrowLeft } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addToCart } = useCart();
  const { toggle, isWished } = useWishlist();

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="font-display text-2xl text-stone-400">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-sand-500 font-body hover:underline">Back to Shop</Link>
      </div>
    </div>
  );

  const images = [product.image, product.hoverImage || product.image, product.image];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    if (!selectedSize) { alert("Please select a size"); return; }
    addToCart({ ...product, qty }, selectedSize, selectedColor);
  };

  const accordionItems = [
    { title: "Description", content: `${product.description} Crafted from premium sustainable materials. Each piece is designed to last season after season while maintaining its shape and color.` },
    { title: "Size & Fit", content: "This style runs true to size. Model is 5'9\" and wearing size Small. We recommend measuring your chest, waist, and hips for the best fit. Our size guide is available for more detailed measurements." },
    { title: "Material & Care", content: "95% Organic Cotton, 5% Elastane. Machine wash cold with similar colors. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean." },
    { title: "Shipping & Returns", content: "Free standard shipping on orders over $75. Express delivery available at checkout. Easy 30-day returns — return for any reason, no questions asked." },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-body text-stone-400 mb-8">
          <Link to="/" className="hover:text-stone-700">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-stone-700">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-stone-700 capitalize">{product.category}</Link>
          <span>/</span>
          <span className="text-stone-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100">
              <img src={images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-24 h-28 rounded-2xl overflow-hidden border-2 transition-all ${activeImage === i ? "border-stone-800" : "border-transparent"}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                {product.badge && (
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full font-body mb-3 ${
                    product.badge === "Sale" ? "bg-red-100 text-red-600" : "bg-stone-100 text-stone-700"
                  }`}>{product.badge}</span>
                )}
                <h1 className="font-display text-3xl font-semibold text-stone-900">{product.name}</h1>
              </div>
              <button
                onClick={() => toggle(product)}
                className={`w-11 h-11 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isWished(product.id) ? "border-red-300 bg-red-50 text-red-400" : "border-stone-200 text-stone-400 hover:border-red-300 hover:text-red-400"
                }`}
              >
                <Heart size={18} fill={isWished(product.id) ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className={i < Math.floor(product.rating) ? "text-sand-400 fill-sand-400" : "text-stone-200 fill-stone-200"} />
                ))}
              </div>
              <span className="text-stone-600 text-sm font-body">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-stone-900">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-stone-400 text-xl line-through font-body">${product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2.5 py-1 rounded-full text-sm font-body font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                  </span>
                </>
              )}
            </div>

            <p className="font-body text-stone-500 text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Colors */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-body font-medium text-stone-800 text-sm">Color</span>
                <span className="text-stone-400 text-xs font-body">
                  {selectedColor ? "Selected" : "Choose color"}
                </span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`w-8 h-8 rounded-full border-4 transition-all ${selectedColor === c ? "border-stone-700 scale-110" : "border-stone-200"}`}
                    style={{ backgroundColor: c }}
                    title={c}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="font-body font-medium text-stone-800 text-sm">Size</span>
                <button className="text-stone-400 hover:text-stone-700 text-xs font-body underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-xl border text-sm font-body font-medium transition-all ${
                      selectedSize === size
                        ? "border-stone-800 bg-stone-800 text-white"
                        : "border-stone-200 text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + Add */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center gap-0 border border-stone-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-3 text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors font-body"
                >
                  −
                </button>
                <span className="px-4 py-3 text-stone-800 font-body font-medium text-sm border-x border-stone-200 min-w-[3rem] text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-3 text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors font-body"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 bg-stone-800 text-white font-body font-medium rounded-full hover:bg-stone-700 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingBag size={17} />
                Add to Cart
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex gap-6 py-4 border-y border-stone-100">
              {[
                { icon: Truck, text: "Free shipping over $75" },
                { icon: RefreshCw, text: "30-day returns" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-stone-500">
                  <Icon size={16} />
                  <span className="text-xs font-body">{text}</span>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="mt-6 space-y-1">
              {accordionItems.map((item) => (
                <div key={item.title} className="border-b border-stone-100">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.title ? null : item.title)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-body font-medium text-stone-800 text-sm">{item.title}</span>
                    <ChevronDown
                      size={16}
                      className={`text-stone-400 transition-transform ${openAccordion === item.title ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openAccordion === item.title && (
                    <p className="pb-4 text-stone-500 text-sm font-body leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-display text-3xl font-semibold text-stone-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 100} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
