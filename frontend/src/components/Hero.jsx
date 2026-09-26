import React from 'react'
import { StarIcon, PhoneIcon } from './Icons'
import { CONTACT_INFO } from '../utils/constants'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden" style={{ 
      backgroundColor: '#112A23'
    }}>
      {/* Radial Gradient Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-20" style={{ 
          background: 'radial-gradient(circle, rgba(224, 99, 83, 0.3) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)'
        }}></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ 
          background: 'radial-gradient(circle, rgba(224, 99, 83, 0.25) 0%, transparent 70%)',
          transform: 'translate(50%, -50%)'
        }}></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Typography */}
          <div className="text-white space-y-6 sm:space-y-8">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 fade-in-up">
              <div className="w-8 h-1" style={{ backgroundColor: '#F2B705' }}></div>
              <span className="text-sm sm:text-base font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#F2B705' }}>
                UNNIYAL, TIRUR • KERALA
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight fade-in-up" style={{ 
              fontFamily: 'Playfair Display, Georgia, serif',
              animationDelay: '0.1s'
            }}>
              Good food.<br />
              <span style={{ color: '#E06353' }}>Better view.</span>
            </h1>
            
            {/* Description Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed fade-in-up" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              animationDelay: '0.2s'
            }}>
              A beloved burger cafe by the beach. Come hungry for a Smash Daddy, stay for the views.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-semibold hover:bg-[#D95B43] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: '#E06353', fontFamily: 'Inter, system-ui, sans-serif' }}
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

            {/* Mobile Review Badge */}
            <div className="lg:hidden inline-flex items-center gap-2 bg-white text-[#112A23] px-4 py-3 rounded-xl shadow-xl fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#F2B705' }}><StarIcon filled={true} /></span>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>4.5</span>
                <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Star Reviews</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Decorative Artwork */}
          <div className="hidden lg:flex items-center justify-end fade-in-up relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full flex justify-end h-full">
              {/* Half-cropped Yellow Circle from extreme right edge */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full" style={{ backgroundColor: '#F2B705' }}></div>
              
              {/* Floating 4.5 Star Review Badge */}
              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 bg-white text-[#112A23] px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-2xl fade-in-up z-10" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: '#F2B705' }}><StarIcon filled={true} /></span>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-base sm:text-lg" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>4.5</span>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Star Reviews</span>
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
