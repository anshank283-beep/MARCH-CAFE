import { useState } from 'react'
import { menuCategories, menuItems } from '../data/menuItems'

function Menu({ activeCategory, setActiveCategory, addToCart }) {
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const featuredItem = menuItems.find(item => item.featured)

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6" style={{ backgroundColor: '#F7F4EB' }}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-sm sm:text-base font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#E06353' }}>
              The Good Stuff
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>
            Come for the burger.
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all text-xs sm:text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-[#E06353] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Card */}
        {featuredItem && activeCategory === 'All' && (
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#E06353' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img 
                    src={featuredItem.image} 
                    alt={featuredItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 md:p-10 text-white flex flex-col justify-center">
                  <div className="inline-block mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    {featuredItem.name}
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {featuredItem.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">₹{featuredItem.price}</span>
                    <button 
                      onClick={() => addToCart(featuredItem)}
                      className="bg-white text-[#E06353] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base md:text-lg shadow-lg"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.filter(item => !item.featured || activeCategory !== 'All').map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg card-hover border-2 border-gray-100"
            >
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                  <p className="text-white/90 text-[10px] sm:text-xs md:text-sm font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item.category}</p>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#112A23' }}>{item.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg sm:text-xl md:text-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#E06353' }}>₹{item.price}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="bg-[#E06353] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold hover:bg-[#D95B43] transition-colors text-xs sm:text-sm md:text-base" 
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
