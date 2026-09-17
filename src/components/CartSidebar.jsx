import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const { items, removeFromCart, updateQty, total, isOpen, setIsOpen, clearCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-full max-w-sm z-[80] bg-white shadow-2xl transform transition-transform duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-stone-700" />
              <h2 className="font-display text-xl font-semibold text-stone-800">Your Cart</h2>
              <span className="bg-sand-400 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.qty, 0)}
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <X size={18} className="text-stone-600" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto py-4 px-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center">
                  <ShoppingBag size={28} className="text-stone-400" />
                </div>
                <div>
                  <p className="font-display text-stone-600 text-lg">Your cart is empty</p>
                  <p className="text-stone-400 text-sm mt-1 font-body">Add something beautiful to get started</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-6 py-2.5 bg-stone-800 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.key} className="flex gap-4 py-4 border-b border-stone-100 last:border-0">
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-body font-medium text-stone-800 text-sm leading-tight truncate">{item.name}</h3>
                      <p className="text-stone-400 text-xs mt-0.5">
                        Size: {item.size} · Color: <span className="inline-block w-3 h-3 rounded-full align-middle ml-1" style={{ backgroundColor: item.color }} />
                      </p>
                      <p className="font-display font-semibold text-stone-800 mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-2 bg-stone-100 rounded-full px-2 py-1">
                          <button onClick={() => updateQty(item.key, item.qty - 1)} className="p-0.5 hover:text-stone-900 text-stone-500 transition-colors">
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-medium text-stone-700 w-4 text-center">{item.qty}</span>
                          <button onClick={() => updateQty(item.key, item.qty + 1)} className="p-0.5 hover:text-stone-900 text-stone-500 transition-colors">
                            <Plus size={12} />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.key)} className="p-1 text-stone-300 hover:text-red-400 transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-stone-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-stone-500">Subtotal</span>
                <span className="font-display text-xl font-semibold text-stone-800">${total.toFixed(2)}</span>
              </div>
              <p className="text-stone-400 text-xs text-center">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3.5 bg-stone-800 text-white font-body font-medium rounded-full hover:bg-stone-700 transition-colors text-sm tracking-wide">
                Proceed to Checkout
              </button>
              <button onClick={clearCart} className="w-full py-2.5 border border-stone-200 text-stone-500 font-body text-sm rounded-full hover:bg-stone-50 transition-colors">
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
