import React from 'react'

const MarchLogo = () => (
  <div className="flex items-center gap-2 text-white">
    <span className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>M</span>
    <span className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>March</span>
  </div>
)

function Footer() {
  return (
    <footer className="py-8 sm:py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: '#112A23' }}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-center">
            <MarchLogo />
          </div>
          
          <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
            <a href="#menu" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm md:text-base font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Menu</a>
            <a href="#beachfront" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm md:text-base font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Our place</a>
            <a href="#reviews" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm md:text-base font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Reviews</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm md:text-base font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Visit</a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="text-white/80 text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            © 2024 March Cafe. All rights reserved. • Oceanfront Dining at Unniyal, Tirur, Kerala
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
