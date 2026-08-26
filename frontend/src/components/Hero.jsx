import React from 'react'
import { MapIcon, StarIcon } from './Icons'
import { CONTACT_INFO } from '../utils/constants'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden checkered-border" style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1550547660-d9450f859349?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      
      <div className="w-full max-w-7xl mx-auto text-center relative z-10 pt-20 sm:pt-24 pb-24 sm:pb-32 px-4 sm:px-6 md:px-8">
        {/* Top Subhead */}
        <div className="inline-block bg-[#F59E0B] text-[#0D3B2E] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 fade-in-up starburst-badge" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.15em', fontWeight: 'bold' }}>
          UNNIYAL, TIRUR · KERALA
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight fade-in-up px-2 retro-text" style={{ fontFamily: 'Georgia, serif', animationDelay: '0.2s' }}>
          MARCH CAFE
        </h1>
        
        <p className="text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4 font-bold" style={{ fontFamily: 'Georgia, serif', animationDelay: '0.4s', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          TRUE LOVE IS A DOUBLE PATTY
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#DC2626] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold hover:bg-[#B91C1C] transition-all pulse-button text-sm sm:text-base md:text-lg shadow-lg border-4 border-[#F59E0B]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            VIEW FULL MENU
          </button>
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F59E0B] text-[#0D3B2E] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold hover:bg-[#D97706] transition-all text-sm sm:text-base md:text-lg shadow-lg border-4 border-white flex items-center justify-center gap-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <MapIcon />
            FIND US ON MAP
          </a>
        </div>

        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#DC2626] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full shadow-lg border-4 border-[#F59E0B] fade-in-up starburst-badge" style={{ animationDelay: '0.8s' }}>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#F59E0B] bg-white rounded-full p-0.5 sm:p-1"><StarIcon filled={true} /></span>
            ))}
          </div>
          <span className="font-bold text-xs sm:text-sm md:text-base">4.5 RATING</span>
          <span className="text-white/90 text-xs sm:text-sm md:text-base hidden sm:inline font-bold">• BEACHFRONT CAFE</span>
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
