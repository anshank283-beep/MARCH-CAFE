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
      
      {/* Yellow Marquee Banner - UNCHANGED */}
      <div className="bg-[#F59E0B] py-3 sm:py-4 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SIGNATURE COFFEE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SEASIDE MOCKTAILS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>FRESH BAKES</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>BEACH SNACKS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>OCEANFRONT DINING</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SUNSET VIEWS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>ARTISANAL FLAVORS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>PEACEFUL BEACHFRONT MORNINGS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SIGNATURE COFFEE</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SEASIDE MOCKTAILS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>FRESH BAKES</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>BEACH SNACKS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>OCEANFRONT DINING</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>SUNSET VIEWS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>ARTISANAL FLAVORS</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>•</span>
            <span className="text-[#0D3B2E] font-bold text-sm sm:text-base mx-4" style={{ fontFamily: 'Georgia, serif' }}>PEACEFUL BEACHFRONT MORNINGS</span>
          </div>
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
