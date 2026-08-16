import React, { useState } from 'react'
import './index.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState([])

  const menuCategories = ['All', 'Burgers', 'Sides', 'Drinks & Coffee']

  const menuItems = [
    { id: 1, name: 'Smash Daddy', category: 'Burgers', price: 299, featured: true, description: 'Double patty smash burger with special sauce', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
    { id: 2, name: 'Blue Belly', category: 'Burgers', price: 349, featured: false, description: 'Blue cheese crumbles with caramelized onions', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80' },
    { id: 3, name: 'Goat Burger', category: 'Burgers', price: 399, featured: false, description: 'Premium goat meat with herbs and spices', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80' },
    { id: 4, name: 'Loaded Fries', category: 'Sides', price: 199, featured: false, description: 'Crispy fries loaded with cheese and bacon', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80' },
    { id: 5, name: 'Pistachio Banana', category: 'Drinks & Coffee', price: 199, featured: false, description: 'Creamy pistachio with fresh banana', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80' },
    { id: 6, name: 'Mango Shake', category: 'Drinks & Coffee', price: 149, featured: false, description: 'Fresh mango smoothie', image: 'https://images.unsplash.com/photo-994894276910-4097b5e6f8b5?w=800&q=80' },
    { id: 7, name: 'Thick Town Shake', category: 'Drinks & Coffee', price: 179, featured: false, description: 'Extra thick chocolate shake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80' },
    { id: 8, name: 'Coffee', category: 'Drinks & Coffee', price: 99, featured: false, description: 'Fresh brewed filter coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80' },
  ]

  const reviews = [
    { id: 1, name: 'Rahul M.', rating: 5, text: 'Food was fresh and amazing taste... good service loaded fries is the best' },
    { id: 2, name: 'Priya S.', rating: 5, text: 'Goated food spot. Delicious food, top-notch quality, and worth every penny.' },
    { id: 3, name: 'Arjun K.', rating: 5, text: 'Best burgers in the town with a good ambience...' },
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

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Unniyal,+Tirur,+Kerala+676302'

  // Simple SVG Icons
  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )

  const StarIcon = ({ filled = false }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  )

  const CartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  )

  const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  )

  const MapIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
  )

  const ClockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  )

  const WhatsAppIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.8a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  )

  const NavigationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
  )

  return (
    <div className="min-h-screen bg-[#F8F5EB]" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D3B2E] px-4 sm:px-6 py-3 sm:py-4">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>March</h1>
          
          <div className="hidden md:flex items-center gap-4 sm:gap-8">
            <a href="#menu" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">Menu</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">Our place</a>
            <a href="#reviews" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">Reviews</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">Visit</a>
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F05A3F] text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-[#D44A33] transition-colors text-sm sm:text-base"
            >
              Get directions
            </a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#menu" className="text-white/80 hover:text-white text-lg py-2" onClick={() => setMobileMenuOpen(false)}>Menu</a>
              <a href="#about" className="text-white/80 hover:text-white text-lg py-2" onClick={() => setMobileMenuOpen(false)}>Our place</a>
              <a href="#reviews" className="text-white/80 hover:text-white text-lg py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="text-white/80 hover:text-white text-lg py-2" onClick={() => setMobileMenuOpen(false)}>Visit</a>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F05A3F] text-white px-4 py-3 rounded-lg font-semibold text-center text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get directions
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0D3B2E] pt-20 sm:pt-24 pb-24 sm:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            UNNIYAL, TIRUR, KERALA
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Good food.<br />
            <span className="text-[#F05A3F]">Better view.</span>
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Beachfront burgers and shakes with a sunset view that makes every meal memorable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F05A3F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#D44A33] transition-colors text-base sm:text-lg"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              See what's cooking →
            </button>
            <a
              href={`tel:+919876543210`}
              className="bg-white/10 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-base sm:text-lg"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Call / Visit →
            </a>
          </div>

          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-[#0D3B2E] px-3 sm:px-4 py-2 rounded-full shadow-lg">
            <span className="text-[#F05A3F]"><StarIcon filled={true} /></span>
            <span className="font-semibold text-sm sm:text-base">4.5 ★★★★★</span>
            <span className="text-gray-600 text-sm sm:text-base">42 reviews</span>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="#F8F5EB" className="w-full h-20 sm:h-24 md:h-28 lg:h-32">
            <path d="M0,64 C480,150 960,0 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Yellow Marquee Banner */}
      <div className="bg-[#F59E0B] py-3 sm:py-4 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SMASH DADDY BURGER</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>LOADED FRIES</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>BLUE BELLY BURGER</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>THICK TOWN SHAKE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>GOAT BURGER</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>MANGO SHAKE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>PISTACHIO BANANA SHAKE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>COFFEE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>PEACEFUL BEACHFRONT MORNINGS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SHAKES WORTH THE DRIVE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SMASH DADDY BURGER</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>LOADED FRIES</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>BLUE BELLY BURGER</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>THICK TOWN SHAKE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>GOAT BURGER</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>MANGO SHAKE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>PISTACHIO BANANA SHAKE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>COFFEE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>PEACEFUL BEACHFRONT MORNINGS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SHAKES WORTH THE DRIVE</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F8F5EB]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D3B2E] mb-3 sm:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Come for the burger
            </h2>
            <p className="text-gray-600 text-base sm:text-lg px-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Fresh ingredients, bold flavors, and a view that can't be beat
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                  activeCategory === category
                    ? 'bg-[#0D3B2E] text-white'
                    : 'bg-white text-[#0D3B2E] hover:bg-[#0D3B2E]/10'
                }`}
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  item.featured ? 'ring-4 ring-[#F05A3F]' : ''
                }`}
              >
                <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-[#0D3B2E]/20 to-[#0D3B2E]/5 flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-base sm:text-lg mb-1 text-[#0D3B2E]" style={{ fontFamily: 'Georgia, serif' }}>{item.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#F05A3F] font-bold text-lg sm:text-xl">₹{item.price}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-[#F05A3F] text-white p-2 sm:p-2.5 rounded-lg hover:bg-[#D44A33] transition-colors"
                    >
                      <CartIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Drawer */}
          {cart.length > 0 && (
            <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 p-4 sm:p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0D3B2E]" style={{ fontFamily: 'Georgia, serif' }}>Your Order</h3>
                <button 
                  onClick={() => setCart([])}
                  className="text-gray-400 hover:text-[#0D3B2E] p-2"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-[#F8F5EB] p-3 sm:p-4 rounded-xl">
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-[#0D3B2E]">{item.name}</p>
                      <p className="text-[#F05A3F] text-sm sm:text-base">₹{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-400 p-2"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-3 sm:mb-4">
                <div className="flex justify-between text-lg sm:text-xl font-bold text-[#0D3B2E]">
                  <span>Total:</span>
                  <span className="text-[#F05A3F]">₹{cart.reduce((sum, item) => sum + item.price, 0)}</span>
                </div>
              </div>

              <button
                onClick={orderViaWhatsApp}
                className="w-full bg-[#25D366] text-white py-3 sm:py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 text-base sm:text-lg"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                <WhatsAppIcon />
                Order via WhatsApp
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Teal Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#68B09A]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center">
              {/* Minimalist Sun & Sea Art */}
              <div className="mb-6 sm:mb-8">
                <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto">
                  <circle cx="100" cy="60" r="40" fill="#F05A3F" opacity="0.8" />
                  <path d="M20 140 Q60 100 100 140 T180 140" stroke="#0D3B2E" strokeWidth="3" fill="none" />
                  <path d="M30 160 Q70 120 100 160 T170 160" stroke="#0D3B2E" strokeWidth="3" fill="none" opacity="0.6" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                A little room to breathe
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 px-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                "A peaceful spot to enjoy time by the sea."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2" style={{ fontFamily: 'Georgia, serif' }}>Beachfront</p>
                <p className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>View</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2" style={{ fontFamily: 'Georgia, serif' }}>Fresh</p>
                <p className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>Ingredients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2" style={{ fontFamily: 'Georgia, serif' }}>4.5 / 5</p>
                <p className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0D3B2E]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Word travels by the sea
            </h2>
            <div className="inline-flex items-center gap-2 bg-[#F05A3F] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-bold">4.5</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-white"><StarIcon filled={true} /></span>
                ))}
              </div>
            </div>
            <p className="text-white/80 text-base sm:text-lg px-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
              What our guests are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#0B2B22] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[#F05A3F]"><StarIcon filled={true} /></span>
                  ))}
                </div>
                <p className="text-white/90 mb-3 sm:mb-4 italic text-sm sm:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>{review.text}</p>
                <p className="font-semibold text-white text-sm sm:text-base" style={{ fontFamily: 'Georgia, serif' }}>{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F8F5EB]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D3B2E] mb-3 sm:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              The beach is the invitation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Left Block - Coral */}
            <div className="bg-[#F05A3F] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Take the scenic route
              </h3>
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Unniyal, Tirur, Kerala 676302
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#F05A3F] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                <NavigationIcon />
                Get directions
              </a>
            </div>

            {/* Right Block - Dark Green */}
            <div className="bg-[#0D3B2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Good to know
              </h3>
              <div className="space-y-3 sm:space-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                  <span className="text-white/80 text-sm sm:text-base">Open</span>
                  <span className="font-semibold text-sm sm:text-base">Closes 12 am</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                  <span className="text-white/80 text-sm sm:text-base">Ways to enjoy</span>
                  <span className="font-semibold text-sm sm:text-base">Dine in</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                  <span className="text-white/80 text-sm sm:text-base">What's with you</span>
                  <span className="font-semibold text-sm sm:text-base">Drive-in pickup</span>
                </div>
                <a
                  href={`tel:+919876543210`}
                  className="inline-flex items-center gap-2 bg-[#F05A3F] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#D44A33] transition-colors mt-3 sm:mt-4 text-sm sm:text-base"
                >
                  <PhoneIcon />
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D3B2E] py-10 sm:py-12 px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>March</h2>
            
            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
              <a href="#menu" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>Menu</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>Our place</a>
              <a href="#reviews" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>Reviews</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>Visit</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-white/60 text-xs sm:text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
              © 2024 March Cafe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
