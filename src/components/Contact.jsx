import React from 'react'
import { MapIcon, ClockIcon, PhoneIcon } from './Icons'
import { CONTACT_INFO } from '../utils/constants'

function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-[#FFFBEB]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Visit Us
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Experience oceanfront dining at The March Cafe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Left Block - Red */}
          <div className="bg-[#DC2626] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Location
            </h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
              <div className="flex items-start gap-2 sm:gap-3">
                <MapIcon />
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg mb-1">Address</p>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#DC2626] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold hover:bg-[#FFFBEB] transition-colors text-sm sm:text-base md:text-lg shadow-lg"
              >
                <MapIcon />
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Block - White with Red accent */}
          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border-2 border-[#DC2626]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-[#DC2626]" style={{ fontFamily: 'Georgia, serif' }}>
              Contact & Hours
            </h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
              <div className="flex items-start gap-2 sm:gap-3">
                <ClockIcon />
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg mb-1 text-gray-800">Opening Hours</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">Open Daily • Closes 12 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <PhoneIcon />
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg mb-1 text-gray-800">Phone</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
