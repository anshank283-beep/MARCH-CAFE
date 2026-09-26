import React from 'react'
import { StarIcon } from './Icons'

const Beachfront = () => {
  return (
    <section id="beachfront" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8" style={{ backgroundColor: '#85BBA8' }}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Framed Graphic Illustration */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Frame */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 border-8 border-white rounded-lg sm:rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                {/* Simple illustration of sun and mountains over water */}
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4" style={{ backgroundColor: '#F2B705' }}></div>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="w-8 h-16 sm:w-10 sm:h-20" style={{ backgroundColor: '#112A23', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    <div className="w-12 h-20 sm:w-14 sm:h-24" style={{ backgroundColor: '#16332A', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    <div className="w-8 h-16 sm:w-10 sm:h-20" style={{ backgroundColor: '#112A23', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                  </div>
                  <div className="w-full h-8 sm:h-10" style={{ backgroundColor: '#4A8B7F' }}></div>
                  <div className="mt-4">
                    <span className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>March</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ 
              fontFamily: 'Playfair Display, Georgia, serif'
            }}>
              A little room to breathe.
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl italic leading-relaxed max-w-xl" style={{ 
              fontFamily: 'Playfair Display, Georgia, serif',
              opacity: 0.9
            }}>
              "The perfect escape from the everyday chaos. Peaceful mornings, stunning sunsets, and food that feeds the soul."
            </p>

            {/* Stat Tags */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-sm sm:text-base font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Beachfront</span>
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-sm sm:text-base font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Fresh</span>
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#F2B705' }}><StarIcon filled={true} /></span>
                  ))}
                </div>
                <span className="text-sm sm:text-base font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>4.5 / 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beachfront
