import React from 'react'
import { StarIcon, PhoneIcon } from './Icons'
import { CONTACT_INFO } from '../utils/constants'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden" style={{ 
      backgroundColor: '#112A23',
      backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#112A23]/95 via-[#112A23]/80 to-[#112A23]/60"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Typography */}
          <div className="text-white space-y-6 sm:space-y-8">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 fade-in-up">
              <div className="w-8 h-1 bg-[#F2B705]"></div>
              <span className="text-sm sm:text-base font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#F2B705' }}>
                UNNIYAL, TIRUR • KERALA
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in-up" style={{ 
              fontFamily: 'Playfair Display, Georgia, serif',
              animationDelay: '0.1s'
            }}>
              Good food.<br />
              <span style={{ color: '#E06353' }}>Better view.</span>
            </h1>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#E06353] text-white rounded-full font-semibold hover:bg-[#D95B43] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                See what's cooking ↗
              </button>
              <a
                href={CONTACT_INFO.phoneUrl}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <PhoneIcon />
                Call the cafe ↗
              </a>
            </div>
          </div>
          
          {/* Right Side - Decorative Artwork */}
          <div className="hidden lg:flex items-center justify-center fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Large Yellow Circle */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full" style={{ backgroundColor: '#F2B705' }}></div>
              
              {/* Floating Review Pill Card */}
              <div className="absolute -bottom-4 -right-4 bg-white text-[#112A23] px-6 py-4 rounded-xl shadow-2xl fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: '#F2B705' }}><StarIcon filled={true} /></span>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>4.5</span>
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Star Reviews</span>
                  </div>
                </div>
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
