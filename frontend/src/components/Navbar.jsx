import React from 'react'
import { MenuIcon, CloseIcon, CartIcon } from './Icons'
import { Z_INDEX, CONTACT_INFO } from '../utils/constants'

const MarchLogo = () => (
  <div className="flex items-center gap-2">
    <span className="text-white font-bold text-2xl sm:text-3xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>M</span>
    <span className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>March</span>
  </div>
)

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, cartItemCount, setCartOpen }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 bg-[#112A23]/95 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10`} style={{ zIndex: Z_INDEX.navbar }}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <MarchLogo />
        </div>
        
        {/* Center - Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          <a href="#menu" className="text-white/90 hover:text-white text-sm sm:text-base font-medium transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Menu</a>
          <a href="#beachfront" className="text-white/90 hover:text-white text-sm sm:text-base font-medium transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Our place</a>
          <a href="#reviews" className="text-white/90 hover:text-white text-sm sm:text-base font-medium transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Reviews</a>
          <a href="#contact" className="text-white/90 hover:text-white text-sm sm:text-base font-medium transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Visit</a>
        </div>
        
        {/* Right - Get Directions Button + Cart */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Get Directions Button (Desktop) */}
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 border-2 border-white text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-white hover:text-[#112A23] transition-all text-sm sm:text-base"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Get directions ↗
          </a>
          
          {/* Cart Icon with Badge */}
          <button 
            className="relative text-white p-2"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <CartIcon />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E06353] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          
          {/* Hamburger Menu */}
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-white/10">
          <div className="flex flex-col gap-3">
            <a href="#menu" className="text-white/90 hover:text-white text-base py-2 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#beachfront" className="text-white/90 hover:text-white text-base py-2 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Our place</a>
            <a href="#reviews" className="text-white/90 hover:text-white text-base py-2 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="text-white/90 hover:text-white text-base py-2 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Visit</a>
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-[#112A23] transition-all text-sm"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get directions ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
