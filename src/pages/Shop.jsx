import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [onlyNew, setOnlyNew] = useState(false);
  const [onlySale, setOnlySale] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "all") list = list.filter((p) => p.category === activeCategory);
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (onlyNew) list = list.filter((p) => p.isNew);
    if (onlySale) list = list.filter((p) => p.badge === "Sale");

    switch (sort) {
      case "newest": return list.filter((p) => p.isNew).concat(list.filter((p) => !p.isNew));
      case "price-asc": return [...list].sort((a, b) => a.price - b.price);
      case "price-desc": return [...list].sort((a, b) => b.price - a.price);
      case "rating": return [...list].sort((a, b) => b.rating - a.rating);
      default: return list;
    }
  }, [activeCategory, sort, priceRange, onlyNew, onlySale]);

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-100 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-stone-900 mb-2">Shop</h1>
          <p className="font-body text-stone-400">{filtered.length} products</p>

          {/* Category Pills */}
          <div className="flex gap-2 mt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSearchParams(cat.id !== "all" ? { category: cat.id } : {}); }}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-stone-800 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-200 rounded-full text-stone-600 text-sm font-body font-medium hover:border-stone-400 transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
            {(onlyNew || onlySale) && (
              <span className="w-5 h-5 bg-sand-400 text-white rounded-full text-xs flex items-center justify-center">
                {(onlyNew ? 1 : 0) + (onlySale ? 1 : 0)}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2">
            <span className="text-stone-500 text-sm font-body hidden sm:block">Sort by</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-stone-200 rounded-full text-stone-700 text-sm font-body outline-none cursor-pointer hover:border-stone-400 transition-colors"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {filtersOpen && (
          <div className="bg-white border border-stone-100 rounded-2xl p-6 mb-8 animate-fade-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body font-semibold text-stone-800">Filters</h3>
              <button onClick={() => { setOnlyNew(false); setOnlySale(false); setPriceRange([0, 200]); }} className="text-stone-400 hover:text-stone-700 text-xs font-body">
                Reset all
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Price */}
              <div>
                <p className="text-stone-600 text-sm font-body font-medium mb-3">Price Range</p>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full accent-stone-700"
                  />
                  <div className="flex justify-between text-xs text-stone-400 font-body">
                    <span>$0</span>
                    <span className="text-stone-700 font-medium">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <p className="text-stone-600 text-sm font-body font-medium mb-3">Availability</p>
                <div className="space-y-2.5">
                  {[
                    { label: "New Arrivals", val: onlyNew, set: setOnlyNew },
                    { label: "On Sale", val: onlySale, set: setOnlySale },
                  ].map(({ label, val, set }) => (
                    <label key={label} className="flex items-center gap-2.5 cursor-pointer group">
                      <div
                        onClick={() => set(!val)}
                        className={`w-4.5 h-4.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          val ? "bg-stone-800 border-stone-800" : "border-stone-300 group-hover:border-stone-500"
                        }`}
                      >
                        {val && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <span className="text-stone-600 text-sm font-body">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-stone-400 mb-4">No products found</p>
            <button
              onClick={() => { setActiveCategory("all"); setOnlyNew(false); setOnlySale(false); setPriceRange([0, 200]); }}
              className="px-6 py-2.5 bg-stone-800 text-white rounded-full font-body text-sm hover:bg-stone-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={Math.min(i * 50, 400)} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
