import { useState } from 'react'
import { menuCategories, menuItems } from '../data/menuItems'

function Menu({ activeCategory, setActiveCategory, addToCart }) {
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6" style={{ backgroundColor: '#F7F4EB' }}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Our Menu
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-2 sm:px-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Discover our artisanal creations crafted with love and the finest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all text-xs sm:text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-[#DC2626] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg card-hover border-2 checkered-border ${
                item.featured ? 'border-[#DC2626]' : 'border-gray-100'
              }`}
            >
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 starburst-badge text-[10px] sm:text-xs">
                    {item.badge}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                  <p className="text-white/90 text-[10px] sm:text-xs md:text-sm font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.category}</p>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-[#DC2626]" style={{ fontFamily: 'Georgia, serif' }}>{item.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#DC2626] font-bold text-lg sm:text-xl md:text-2xl">₹{item.price}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="bg-[#DC2626] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors text-xs sm:text-sm md:text-base" 
                    style={{ fontFamily: 'system-ui, sans-serif' }}
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
