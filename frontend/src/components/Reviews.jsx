import { Star } from 'lucide-react'

function Reviews() {
  const reviews = [
    { id: 1, name: 'Rahul M.', rating: 5, text: 'Best burgers in town with a good ambience. The beach view makes it perfect!', tags: ['#BeachView', '#Burgers'] },
    { id: 2, name: 'Priya S.', rating: 5, text: 'Goated food spot 🔥 Delicious food, top-notch quality, and worth every penny.', tags: ['#LoadedFries', '#Ambience'] },
    { id: 3, name: 'Arjun K.', rating: 4, text: 'Great place with a beautiful beach view and peaceful atmosphere. Love the sunset!', tags: ['#BeachView', '#Peaceful'] },
  ]

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Our <span className="text-[#FFB300]">Guests Say</span>
          </h2>
          <p className="text-gray-400 text-lg">Real reviews from our happy customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFB300] fill-[#FFB300]" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{review.name}</p>
                <div className="flex gap-2">
                  {review.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-[#FFB300]/20 text-[#FFB300] px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
