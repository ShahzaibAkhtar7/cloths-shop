import { Link } from "react-router-dom";
import { ArrowRight, Truck, RefreshCw, Shield, Headphones, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products, categories, testimonials } from "../data/products";

const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-100">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMHNob3Bpbmd8ZW58MHx8MHx8fDI%3D"
            alt="Hero"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-100/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl pt-24 pb-16">
            <p className="font-body text-sand-600 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Spring / Summer Collection 2025
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-stone-900 leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
              Dress the Way{" "}
              <span className="italic text-sand-600">You Feel</span>
            </h1>
            <p className="font-body text-stone-500 text-lg leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
              Explore our curated collection of timeless pieces designed for modern living. Quality craftsmanship, sustainable materials.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-800 text-white font-body font-medium rounded-full hover:bg-stone-700 transition-all duration-200 hover:gap-3"
              >
                Shop Now <ArrowRight size={17} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-300 text-stone-700 font-body font-medium rounded-full hover:border-stone-800 hover:bg-stone-50 transition-all duration-200"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-12 right-8 lg:right-24 hidden lg:flex gap-6">
          {[
            { label: "Products", value: "500+" },
            { label: "Happy Clients", value: "12K+" },
            { label: "Countries", value: "28" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-sm">
              <p className="font-display text-2xl font-bold text-stone-800">{stat.value}</p>
              <p className="font-body text-stone-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-sand-600 text-sm font-medium tracking-widest uppercase mb-3">Browse by</p>
            <h2 className="font-display text-4xl font-semibold text-stone-900">Shop Collections</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Women",
                href: "/shop?category=women",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
                count: "180+ styles",
              },
              {
                label: "Men",
                href: "/shop?category=men",
                image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
                count: "120+ styles",
              },
              {
                label: "Kids",
                href: "/shop?category=kids",
                image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80",
                count: "95+ styles",
              },
              {
                label: "Accessories",
                href: "/shop?category=accessories",
                image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
                count: "60+ items",
              },
            ].map((cat, i) => (
              <Link
                key={cat.label}
                to={cat.href}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden block"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-white text-2xl font-semibold">{cat.label}</h3>
                  <p className="font-body text-stone-300 text-sm mt-0.5">{cat.count}</p>
                  <span className="inline-flex items-center gap-1 text-sand-300 text-sm font-body mt-2 group-hover:gap-2 transition-all">
                    Shop <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-body text-sand-600 text-sm font-medium tracking-widest uppercase mb-3">Curated for you</p>
              <h2 className="font-display text-4xl font-semibold text-stone-900">Featured Pieces</h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 font-body font-medium text-sm transition-colors group"
            >
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 100} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white font-body text-sm font-medium rounded-full hover:bg-stone-700 transition-colors">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative py-24 overflow-hidden bg-stone-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80"
            alt="banner"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sand-300 text-sm font-medium tracking-widest uppercase mb-4">Limited Time</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4">
            Summer Sale
          </h2>
          <p className="font-display text-7xl sm:text-9xl font-bold text-sand-400/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
            UP TO 40% OFF
          </p>
          <p className="font-body text-stone-300 text-lg mb-8">
            Up to 40% off on selected summer essentials
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sand-500 hover:bg-sand-600 text-white font-body font-medium rounded-full transition-colors text-sm tracking-wide"
          >
            Shop the Sale <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-sand-600 text-sm font-medium tracking-widest uppercase mb-3">Just dropped</p>
            <h2 className="font-display text-4xl font-semibold text-stone-900">New Arrivals</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter((p) => p.isNew).slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-cream-100 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $75" },
              { icon: RefreshCw, title: "Easy Returns", desc: "30-day hassle-free returns" },
              { icon: Shield, title: "Secure Payment", desc: "256-bit SSL encryption" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated customer care" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Icon size={22} className="text-sand-500" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-stone-800 text-sm">{title}</h3>
                  <p className="text-stone-400 text-xs mt-0.5 font-body">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-sand-600 text-sm font-medium tracking-widest uppercase mb-3">What they say</p>
            <h2 className="font-display text-4xl font-semibold text-stone-900">Loved by Customers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="bg-cream-50 rounded-3xl p-8 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-sand-400 fill-sand-400" />
                  ))}
                </div>
                <p className="font-body text-stone-600 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-body font-semibold text-stone-800 text-sm">{t.name}</p>
                    <p className="text-stone-400 text-xs font-body">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram-like grid */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="font-body text-stone-500 text-sm mb-2">Follow our style journey</p>
            <h2 className="font-display text-3xl font-semibold text-stone-800">@velosfashion</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80",
              "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80",
              "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=80",
              "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=300&q=80",
              "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&q=80",
              "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80",
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl group cursor-pointer">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
