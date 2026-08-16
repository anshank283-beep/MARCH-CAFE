import { Star, ShoppingCart, Navigation, Waves, Award, Heart } from 'lucide-react'

function Hero() {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Unniyal,+Tirur,+Kerala+676302'

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/20 to-[#0D0D0D]"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFB300] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8F00] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB300]/20 border border-[#FFB300]/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-[#FFB300] fill-[#FFB300]" />
            <span className="text-[#FFB300] font-semibold">4.5 ★ (42+ Google Reviews)</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-[#FFB300]">Gourmet Burgers</span> by the Beach
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-2">
            Unniyal, Tirur, Kerala
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Experience the best smash burgers in town at Unniyal Beach. 
            Fresh ingredients, stunning sunset views, and unforgettable flavors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FFB300] text-[#0D0D0D] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#FF8F00] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Explore Menu
            </button>
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Hero Features */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#3E2723] to-[#1A1A1A] rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Waves className="w-12 h-12 text-[#FFB300] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">Beachfront Dining</h3>
                <p className="text-gray-400 text-sm">Stunning sea views</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Award className="w-12 h-12 text-[#FFB300] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">Premium Quality</h3>
                <p className="text-gray-400 text-sm">Fresh ground meat</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Heart className="w-12 h-12 text-[#FFB300] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">Made with Love</h3>
                <p className="text-gray-400 text-sm">Artisanal recipes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
