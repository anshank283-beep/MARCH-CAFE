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
      <div className="py-3 sm:py-4 overflow-hidden" style={{ backgroundColor: '#F2B705' }}>
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
      </div>

      <Menu 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        addToCart={addToCart}
      />

      <Beachfront />
      
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
