import React from 'react'
import { MenuIcon, CloseIcon, CartIcon } from './Icons'
import { Z_INDEX } from '../utils/constants'

const MarchLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E06353] flex items-center justify-center text-white font-bold text-lg sm:text-xl" style={{ fontFamily: 'Georgia, serif' }}>
      M
    </div>
    <span className="text-white font-semibold text-base sm:text-lg" style={{ fontFamily: 'Georgia, serif' }}>March</span>
  </div>
)

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, cartItemCount, setCartOpen }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 bg-[#16332A]/95 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10`} style={{ zIndex: Z_INDEX.navbar }}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <MarchLogo />
        </div>
        
        <div className="flex items-center gap-4">
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
            <a href="#reviews" className="text-white/90 hover:text-white text-base py-2 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="text-white/90 hover:text-white text-base py-2 font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
