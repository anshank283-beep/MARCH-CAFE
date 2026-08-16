import { useState } from 'react'
import { ShoppingCart, X, MessageCircle } from 'lucide-react'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState([])

  const menuCategories = ['All', 'Smash Burgers', 'Loaded Fries', 'Shakes', 'Combos']

  const menuItems = [
    { id: 1, name: 'Smash Daddy Burger', category: 'Smash Burgers', price: 299, badge: 'Bestseller', description: 'Double patty smash burger with special sauce', image: '🍔' },
    { id: 2, name: 'Blue Belly Burger', category: 'Smash Burgers', price: 349, badge: 'Must Try', description: 'Blue cheese crumbles with caramelized onions', image: '🍔' },
    { id: 3, name: 'Signature Goat Burger', category: 'Smash Burgers', price: 399, badge: 'Chef\'s Special', description: 'Premium goat meat with herbs and spices', image: '🍔' },
    { id: 4, name: 'Loaded Cheese Fries', category: 'Loaded Fries', price: 199, badge: 'Popular', description: 'Crispy fries loaded with cheese and bacon', image: '🍟' },
    { id: 5, name: 'BBQ Pulled Pork Fries', category: 'Loaded Fries', price: 249, badge: '', description: 'Tender pulled pork with BBQ sauce', image: '🍟' },
    { id: 6, name: 'Thick Town Shake', category: 'Shakes', price: 179, badge: 'Bestseller', description: 'Extra thick chocolate shake', image: '🥤' },
    { id: 7, name: 'Pistachio Banana Shake', category: 'Shakes', price: 199, badge: 'Must Try', description: 'Creamy pistachio with fresh banana', image: '🥤' },
    { id: 8, name: 'Mango Shake', category: 'Shakes', price: 149, badge: '', description: 'Fresh mango smoothie', image: '🥤' },
    { id: 9, name: 'Family Combo', category: 'Combos', price: 899, badge: 'Value', description: '4 burgers + 2 fries + 4 drinks', image: '🍔' },
    { id: 10, name: 'Date Night Combo', category: 'Combos', price: 599, badge: 'Popular', description: '2 burgers + 1 loaded fries + 2 shakes', image: '🍔' },
  ]

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const orderViaWhatsApp = () => {
    if (cart.length === 0) {
      alert('Please add items to your cart first!')
      return
    }
    
    const orderText = cart.map(item => `${item.name} - ₹${item.price}`).join('\n')
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const message = `Hi MARCH Cafe! I'd like to order:\n\n${orderText}\n\nTotal: ₹${total}\n\nPlease confirm my order.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-[#FFB300]">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handcrafted burgers, loaded fries, and thick shakes made fresh daily
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-[#FFB300] text-[#0D0D0D]'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFB300]/50 transition-all group"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#3E2723] to-[#1A1A1A] flex items-center justify-center">
                <span className="text-6xl">{item.image}</span>
                {item.badge && (
                  <div className="absolute top-3 right-3 bg-[#FFB300] text-[#0D0D0D] px-3 py-1 rounded-full text-xs font-bold">
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#FFB300] font-bold text-xl">₹{item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#FFB300]/20 text-[#FFB300] p-2 rounded-lg hover:bg-[#FFB300] hover:text-[#0D0D0D] transition-all"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Drawer */}
        {cart.length > 0 && (
          <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-[#1A1A1A] border-l border-white/10 z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Your Order</h3>
              <button 
                onClick={() => setCart([])}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-[#0D0D0D] p-4 rounded-xl">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-[#FFB300]">₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 mb-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-[#FFB300]">₹{cart.reduce((sum, item) => sum + item.price, 0)}</span>
              </div>
            </div>

            <button
              onClick={orderViaWhatsApp}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
