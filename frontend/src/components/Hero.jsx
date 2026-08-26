import React from 'react'
import { MapIcon, StarIcon, PhoneIcon } from './Icons'
import { CONTACT_INFO } from '../utils/constants'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden" style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#16332A]/95 via-[#16332A]/80 to-[#16332A]/60"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Typography */}
          <div className="text-white space-y-6 sm:space-y-8">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 bg-[#E06353]/20 backdrop-blur-sm border border-[#E06353]/30 px-4 py-2 rounded-full fade-in-up">
              <span className="w-2 h-2 bg-[#E06353] rounded-full animate-pulse"></span>
              <span className="text-sm sm:text-base font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                UNNIYAL, TIRUR • KERALA
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in-up" style={{ 
              fontFamily: 'Georgia, Playfair Display, serif',
              animationDelay: '0.1s'
            }}>
              Good food.<br />
              <span className="text-[#E06353]">Better view.</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed fade-in-up" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              animationDelay: '0.2s'
            }}>
              Experience the perfect blend of artisanal flavors and ocean breeze at Kerala's most beloved beachfront cafe.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#E06353] text-white rounded-xl font-semibold hover:bg-[#C75343] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                See what's cooking
              </button>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <MapIcon />
                Get directions
              </a>
              <a
                href={CONTACT_INFO.phoneUrl}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <PhoneIcon />
                Call the cafe
              </a>
            </div>
            
            {/* Review Badge */}
            <div className="inline-flex items-center gap-3 bg-[#4A8B7F] text-white px-5 py-3 rounded-xl shadow-lg fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F59E0B]"><StarIcon filled={true} /></span>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">4.5</span>
                <span className="text-xs text-white/90 uppercase tracking-wide">Star Reviews</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Decorative Image Frame */}
          <div className="hidden lg:flex items-center justify-center fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Circular Frame Accent */}
              <div className="absolute -inset-4 bg-[#E06353]/20 rounded-full blur-3xl"></div>
              <div className="absolute -inset-8 bg-[#4A8B7F]/10 rounded-full blur-3xl"></div>
              
              {/* Main Image */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
                  alt="March Cafe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16332A]/50 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#F7F4EB] text-[#16332A] px-6 py-3 rounded-xl shadow-xl">
                <span className="font-bold text-sm" style={{ fontFamily: 'Georgia, serif' }}>Since 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="#F7F4EB" className="w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32">
          <path d="M0,64 C480,150 960,0 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
