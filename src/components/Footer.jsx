import React from 'react'

const MarchLogo = () => (
  <div className="flex items-center gap-2 text-white">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#DC2626] font-bold text-lg sm:text-xl" style={{ fontFamily: 'Georgia, serif' }}>
      M
    </div>
    <span className="font-semibold text-base sm:text-lg" style={{ fontFamily: 'Georgia, serif' }}>March</span>
  </div>
)

function Footer() {
  return (
    <footer className="bg-[#DC2626] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-center">
            <MarchLogo />
          </div>
          
          <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
            <a href="#menu" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm md:text-base font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>Menu</a>
            <a href="#reviews" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm md:text-base font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>Reviews</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm md:text-base font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="text-white/80 text-xs sm:text-sm md:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>
            © 2024 March Cafe. All rights reserved. • Oceanfront Dining at Unniyal, Tirur, Kerala
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
