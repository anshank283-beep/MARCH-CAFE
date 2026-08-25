import React from 'react'
import { MapIcon, StarIcon } from './Icons'
import { CONTACT_INFO } from '../utils/constants'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden" style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      
      <div className="w-full max-w-7xl mx-auto text-center relative z-10 pt-20 sm:pt-24 pb-24 sm:pb-32 px-4 sm:px-6 md:px-8">
        {/* Top Subhead */}
        <div className="inline-block bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 fade-in-up" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em' }}>
          UNNIYAL, TIRUR · KERALA
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight fade-in-up px-2" style={{ fontFamily: 'Georgia, serif', animationDelay: '0.2s' }}>
          MARCH CAFE
        </h1>
        
        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4 font-light" style={{ fontFamily: 'system-ui, sans-serif', animationDelay: '0.4s' }}>
          Ocean Breeze & Artisanal Flavors
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#DC2626] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold hover:bg-[#B91C1C] transition-all pulse-button text-sm sm:text-base md:text-lg shadow-lg"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            View Full Menu
          </button>
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold hover:bg-white/30 transition-all text-sm sm:text-base md:text-lg shadow-lg flex items-center justify-center gap-2"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            <MapIcon />
            Find Us on Map
          </a>
        </div>

        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full shadow-lg border border-white/30 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#DC2626] bg-white rounded-full p-0.5 sm:p-1"><StarIcon filled={true} /></span>
            ))}
          </div>
          <span className="font-semibold text-xs sm:text-sm md:text-base">4.5 Rating</span>
          <span className="text-white/80 text-xs sm:text-sm md:text-base hidden sm:inline">• Beachfront Cafe</span>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="#FFFBEB" className="w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32">
          <path d="M0,64 C480,150 960,0 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
