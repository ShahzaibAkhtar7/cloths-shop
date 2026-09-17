import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-stone-100">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="About"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-sand-600 text-sm font-medium tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-stone-900 max-w-2xl leading-tight">
            Fashion with Purpose & <span className="italic text-sand-600">Soul</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-stone-900 mb-6">
                We believe in clothing that lasts
              </h2>
              <p className="font-body text-stone-500 text-lg leading-relaxed mb-6">
                Vélos was born from a simple idea: that fashion shouldn't come at the cost of the planet. Since 2018, we've been crafting timeless pieces using sustainable materials and ethical manufacturing practices.
              </p>
              <p className="font-body text-stone-500 leading-relaxed mb-8">
                Every stitch is intentional. Every fabric chosen with care. We partner with certified mills that pay fair wages and maintain environmentally responsible practices. When you wear Vélos, you wear a commitment to better fashion.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white font-body font-medium rounded-full hover:bg-stone-700 transition-colors text-sm"
              >
                Shop the Collection <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
                alt=""
                className="rounded-3xl w-full aspect-[3/4] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
                alt=""
                className="rounded-3xl w-full aspect-[3/4] object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold text-stone-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Sustainable", desc: "All materials are ethically sourced and certified sustainable by leading environmental agencies." },
              { icon: Heart, title: "Ethical", desc: "We partner only with factories that pay fair wages and maintain safe working conditions." },
              { icon: Award, title: "Quality", desc: "Every piece undergoes rigorous quality testing before reaching your wardrobe." },
              { icon: Globe, title: "Global Impact", desc: "We plant one tree for every order placed — over 50,000 trees planted to date." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-8 bg-white rounded-3xl shadow-sm">
                <div className="w-14 h-14 bg-cream-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-sand-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-stone-800 mb-3">{title}</h3>
                <p className="font-body text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3">Meet the Team</h2>
            <p className="font-body text-stone-400">The passionate people behind Vélos</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Isabelle Moreau", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
              { name: "Marcus Chen", role: "Head of Design", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
              { name: "Priya Sharma", role: "Sustainability Lead", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
              { name: "Tobias Wolff", role: "Head of Production", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-full aspect-square rounded-3xl overflow-hidden mb-4 bg-stone-100">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-body font-semibold text-stone-800">{member.name}</h3>
                <p className="font-body text-stone-400 text-sm mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-800 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-semibold text-white mb-4">
            Ready to refresh your wardrobe?
          </h2>
          <p className="font-body text-stone-300 mb-8">
            Explore our latest collections and find pieces you'll love for years to come.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sand-500 hover:bg-sand-600 text-white font-body font-medium rounded-full transition-colors"
          >
            Shop Now <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
