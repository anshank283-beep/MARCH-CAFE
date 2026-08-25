import { useState } from 'react'
import { Menu, X, Utensils } from 'lucide-react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Utensils className="w-8 h-8 text-[#FFB300]" />
            <span className="text-2xl font-bold text-[#FFB300]">MARCH</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-gray-300 hover:text-[#FFB300] transition-colors">Menu</a>
            <a href="#about" className="text-gray-300 hover:text-[#FFB300] transition-colors">About</a>
            <a href="#reviews" className="text-gray-300 hover:text-[#FFB300] transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-300 hover:text-[#FFB300] transition-colors">Contact</a>
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FFB300] text-[#0D0D0D] px-4 py-2 rounded-lg font-semibold hover:bg-[#FF8F00] transition-colors"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#menu" className="text-gray-300 hover:text-[#FFB300] transition-colors" onClick={() => setMobileMenuOpen(false)}>Menu</a>
              <a href="#about" className="text-gray-300 hover:text-[#FFB300] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#reviews" className="text-gray-300 hover:text-[#FFB300] transition-colors" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="text-gray-300 hover:text-[#FFB300] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <button 
                onClick={() => {
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
                  setMobileMenuOpen(false)
                }}
                className="bg-[#FFB300] text-[#0D0D0D] px-4 py-2 rounded-lg font-semibold hover:bg-[#FF8F00] transition-colors"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
