import React from 'react'
import { MapIcon, ClockIcon, PhoneIcon } from './Icons'
import { CONTACT_INFO } from '../utils/constants'

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6" style={{ backgroundColor: '#F7F4EB' }}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>
            The beach is the invitation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Left Card - Coral Red */}
          <div className="rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl" style={{ backgroundColor: '#E06353' }}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Take the scenic route.
            </h3>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <div className="flex items-start gap-3">
                <MapIcon />
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg mb-2">Address</p>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#E06353] px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base md:text-lg shadow-lg"
              >
                Get directions ↗
              </a>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/30 transition-colors text-sm sm:text-base md:text-lg"
              >
                Back to top ↗
              </button>
            </div>
          </div>

          {/* Right Card - Dark Green */}
          <div className="rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl" style={{ backgroundColor: '#112A23' }}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Good to know
            </h3>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <div className="flex items-start gap-3">
                <ClockIcon />
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg mb-2">Opening Hours</p>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg">Open Daily • Closes 12 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg mb-1">Dine-in Available</p>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg">Enjoy your meal with a view</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg mb-1">Kerbside Pickup</p>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg">Quick pickup available</p>
                </div>
              </div>
            </div>
            <a
              href={CONTACT_INFO.phoneUrl}
              className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#112A23] px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base md:text-lg shadow-lg"
            >
              <PhoneIcon />
              Call March ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
