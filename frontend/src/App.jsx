import React, { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Beachfront from './components/Beachfront'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { useCart } from './hooks/useCart'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [cartOpen, setCartOpen] = useState(false)
  
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartItemCount
  } = useCart()

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#F7F4EB' }}>
      <Navbar 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        cartItemCount={cartItemCount}
        setCartOpen={setCartOpen}
      />
      
      <Hero />
      
      {/* Yellow Marquee Banner */}
      <div className="relative py-3 sm:py-4 overflow-hidden" style={{ backgroundColor: '#F2B705' }}>
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>LOADED FRIES</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>•</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>SHAKES WORTH THE DRIVE</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>•</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>PEACEFUL BEACHFRONT MORNINGS</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>•</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>LOADED FRIES</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>•</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>SHAKES WORTH THE DRIVE</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>•</span>
            <span className="font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>PEACEFUL BEACHFRONT MORNINGS</span>
          </div>
        </div>
        {/* Wavy cream border transition at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="#F7F4EB" className="w-full h-12 sm:h-16">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      <Beachfront />

      <Menu 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        addToCart={addToCart}
      />
      
      <Reviews />
      <Contact />
      <Footer />
      
      <CartDrawer 
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        cartTotal={cartTotal}
      />
    </div>
  )
}

export default App
