import { Link } from "react-router-dom";
import { Share2, Rss, Send, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-700">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cream-100 rounded-sm flex items-center justify-center">
                <span className="text-stone-900 font-display text-sm font-bold">V</span>
              </div>
              <span className="font-display text-2xl font-semibold text-white">Vélos</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-body mb-6">
              Curated fashion for the modern wardrobe. Quality, style, and sustainability in every stitch.
            </p>
            <div className="flex gap-3">
              {[Share2, Send, Rss].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-sand-500 hover:text-white transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-sm tracking-wider uppercase">Shop</h4>
            <ul className="space-y-3">
              {["Women's Collection", "Men's Collection", "Kids' Collection", "Accessories", "Sale Items", "New Arrivals"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-stone-400 hover:text-sand-400 text-sm font-body transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Sustainability", "Careers", "Press", "Store Locator", "Affiliate Program"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-400 hover:text-sand-400 text-sm font-body transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-sm tracking-wider uppercase">Stay in Style</h4>
            <p className="text-stone-400 text-sm font-body mb-4">
              Get the latest trends and exclusive offers delivered to your inbox.
            </p>
            <div className="flex rounded-full overflow-hidden border border-stone-700 focus-within:border-sand-400 transition-colors">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-stone-300 outline-none placeholder:text-stone-600 font-body"
              />
              <button className="bg-sand-500 hover:bg-sand-600 px-4 py-2.5 text-white transition-colors flex-shrink-0">
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-stone-600 text-xs mt-3 font-body">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs font-body">
            © 2025 Vélos Fashion. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a key={item} href="#" className="text-stone-500 hover:text-stone-300 text-xs font-body transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
