import { Utensils, Instagram, Facebook, MessageCircle, Star } from 'lucide-react'

function Footer() {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Unniyal,+Tirur,+Kerala+676302'

  return (
    <footer className="bg-[#3E2723] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-8 h-8 text-[#FFB300]" />
              <span className="text-2xl font-bold text-[#FFB300]">MARCH</span>
            </div>
            <p className="text-gray-400">Gourmet burgers by the beach at Unniyal, Tirur, Kerala.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-400 hover:text-[#FFB300] transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#FFB300] transition-colors">About</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-[#FFB300] transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#FFB300] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Dine-In</li>
              <li className="text-gray-400">Kerbside Pickup</li>
              <li className="text-gray-400">WhatsApp Ordering</li>
              <li className="text-gray-400">Beachfront Seating</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-[#FFB300] hover:text-[#0D0D0D] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-[#FFB300] hover:text-[#0D0D0D] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-[#FFB300] hover:text-[#0D0D0D] transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFB300] text-[#0D0D0D] px-4 py-2 rounded-lg font-semibold hover:bg-[#FF8F00] transition-colors"
            >
              <Star className="w-4 h-4 fill-[#0D0D0D]" />
              Leave a Review
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 MARCH Cafe. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Made with ❤️ in Tirur, Kerala</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
