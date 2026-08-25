import { Utensils, Waves, Flame } from 'lucide-react'

function Highlights() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#3E2723] to-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-[#FFB300]/20 p-4 rounded-2xl">
              <Utensils className="w-8 h-8 text-[#FFB300]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Dine-In Available</h3>
              <p className="text-gray-400">Enjoy your meal with us</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#FFB300]/20 p-4 rounded-2xl">
              <Waves className="w-8 h-8 text-[#FFB300]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Beachfront Sunset View</h3>
              <p className="text-gray-400">Perfect dining atmosphere</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#FFB300]/20 p-4 rounded-2xl">
              <Flame className="w-8 h-8 text-[#FFB300]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Kerbside Pickup</h3>
              <p className="text-gray-400">Quick & convenient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
