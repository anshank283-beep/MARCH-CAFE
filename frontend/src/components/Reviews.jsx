import React from 'react'
import { StarIcon } from './Icons'
import { reviews } from '../data/reviews'

function Reviews() {
  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Customer Reviews
          </h2>
          <div className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <span className="text-lg sm:text-xl md:text-2xl font-bold">4.5</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-white"><StarIcon filled={true} /></span>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            What our guests are saying about their beachfront dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFFBEB] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-[#DC2626]/30 transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-[#DC2626]"><StarIcon filled={true} /></span>
                ))}
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 italic text-sm sm:text-base md:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>{review.text}</p>
              <p className="font-semibold text-[#DC2626] text-sm sm:text-base md:text-base" style={{ fontFamily: 'Georgia, serif' }}>{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
