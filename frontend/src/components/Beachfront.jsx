import React from 'react'
import { StarIcon } from './Icons'
import { reviews } from '../data/reviews'

const Beachfront = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8" style={{ backgroundColor: '#F7F4EB' }}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ 
            fontFamily: 'Georgia, Playfair Display, serif',
            color: '#16332A'
          }}>
            A little room to breathe
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#16332A',
            opacity: 0.8
          }}>
            Escape the ordinary and find your peace by the sea
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Text Card 1 */}
          <div className="review-card">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ 
              fontFamily: 'Georgia, serif',
              color: '#16332A'
            }}>
              Ocean Breeze
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#16332A',
              opacity: 0.7
            }}>
              Feel the gentle coastal winds as you savor our artisanal creations. The perfect setting for relaxation and connection.
            </p>
          </div>

          {/* Text Card 2 */}
          <div className="review-card">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ 
              fontFamily: 'Georgia, serif',
              color: '#16332A'
            }}>
              Golden Sunsets
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#16332A',
              opacity: 0.7
            }}>
              Watch the sun paint the sky in brilliant hues while enjoying our signature dishes. Every evening is a masterpiece.
            </p>
          </div>

          {/* Text Card 3 */}
          <div className="review-card">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ 
              fontFamily: 'Georgia, serif',
              color: '#16332A'
            }}>
              Fresh Flavors
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#16332A',
              opacity: 0.7
            }}>
              Our chefs craft each dish with locally sourced ingredients, bringing the authentic taste of Kerala to your table.
            </p>
          </div>
        </div>

        {/* Review Quote Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10" style={{ 
            fontFamily: 'Georgia, serif',
            color: '#16332A'
          }}>
            What our guests say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div key={index} className="review-card">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#E06353]"><StarIcon filled={true} /></span>
                  ))}
                </div>
                <p className="text-sm sm:text-base italic mb-4 leading-relaxed" style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#16332A',
                  opacity: 0.8
                }}>
                  "{review.text}"
                </p>
                <p className="text-sm font-semibold" style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#4A8B7F'
                }}>
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beachfront
