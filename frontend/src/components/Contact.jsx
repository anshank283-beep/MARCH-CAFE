import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react'

function Contact() {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Unniyal,+Tirur,+Kerala+676302'

  const orderViaWhatsApp = () => {
    const message = "Hi MARCH Cafe! I'd like to place an order. Please share your menu."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Find <span className="text-[#FFB300]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg">Visit MARCH Cafe at Unniyal Beach, Tirur</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-[#0D0D0D] rounded-2xl p-8 border border-white/10 h-full">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FFB300]/20 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#FFB300]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-400">Unniyal, Tirur, Kerala 676302</p>
                    <p className="text-gray-500 text-sm">Plus Code: WVFJ+QF Tirur, Kerala</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FFB300]/20 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-[#FFB300]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                    <p className="text-gray-400">Open Daily</p>
                    <p className="text-[#FFB300] font-semibold">Closes 12:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FFB300]/20 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-[#FFB300]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Contact</h3>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={`tel:+919876543210`}
                    className="bg-[#FFB300] text-[#0D0D0D] px-6 py-3 rounded-xl font-bold hover:bg-[#FF8F00] transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-5 h-5" />
                    Directions
                  </a>
                  <button
                    onClick={orderViaWhatsApp}
                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.5!2d75.9!3d10.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU0JzAwLjAiTiA3NcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MARCH Cafe Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
