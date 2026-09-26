import React from 'react'
import { StarIcon } from './Icons'
import { reviews } from '../data/reviews'

function Reviews() {
  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6" style={{ backgroundColor: '#112A23' }}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Word travels by the sea.
          </h2>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <span className="text-lg sm:text-xl md:text-2xl font-bold">4.5</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#F2B705' }}><StarIcon filled={true} /></span>
              ))}
            </div>
            <span className="text-sm sm:text-base font-semibold uppercase tracking-wide ml-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Star Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Card 1 - Coral Highlighted */}
          <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl" style={{ backgroundColor: '#E06353' }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#F2B705' }}><StarIcon filled={true} /></span>
              ))}
            </div>
            <p className="text-white mb-4 italic text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              "{reviews[0].text}"
            </p>
            <p className="font-semibold text-white text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{reviews[0].name}</p>
          </div>

          {/* Card 2 - Dark Green */}
          <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10" style={{ backgroundColor: '#16332A' }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#F2B705' }}><StarIcon filled={true} /></span>
              ))}
            </div>
            <p className="text-white mb-4 italic text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              "{reviews[1].text}"
            </p>
            <p className="font-semibold text-white text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{reviews[1].name}</p>
          </div>

          {/* Card 3 - Dark Green */}
          <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10" style={{ backgroundColor: '#16332A' }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#F2B705' }}><StarIcon filled={true} /></span>
              ))}
            </div>
            <p className="text-white mb-4 italic text-sm sm:text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              "{reviews[2].text}"
            </p>
            <p className="font-semibold text-white text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{reviews[2].name}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
