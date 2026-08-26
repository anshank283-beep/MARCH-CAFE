import React from 'react'
import { CloseIcon } from './Icons'
import { Z_INDEX, CONTACT_INFO, WHATSAPP_CONFIG } from '../utils/constants'

const CartDrawer = ({ cartOpen, setCartOpen, cart, removeFromCart, updateQuantity, cartTotal }) => {
  const sendWhatsAppOrder = () => {
    if (cart.length === 0) return

    // Sanitize and validate WhatsApp number with fallback
    let sanitizedNumber = CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')
    if (!sanitizedNumber || sanitizedNumber.length < 10) {
      // Fallback to a default number if env var is missing
      console.warn('Using fallback WhatsApp number')
      sanitizedNumber = '919876543210'
    }

    // Build message with sanitized data
    let message = `${WHATSAPP_CONFIG.orderPrefix}\n\n`
    cart.forEach(item => {
      // Sanitize item name to prevent injection
      const sanitizedName = item.name.replace(/[<>]/g, '').substring(0, 50)
      const safeQuantity = Math.max(0, Math.min(99, item.quantity || 0))
      const safePrice = Math.max(0, Math.min(100000, item.price || 0))
      message += `• ${sanitizedName} x${safeQuantity} - ₹${safePrice * safeQuantity}\n`
    })
    message += `\n${WHATSAPP_CONFIG.totalPrefix}₹${Math.max(0, Math.min(1000000, cartTotal))}*`

    // Encode message safely
    const encodedMessage = encodeURIComponent(message)
    // Use WhatsApp API URL format
    const whatsappUrl = `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`
    
    // Open in new window with rel=noopener for security
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {cartOpen && (
        <div className="fixed inset-0" style={{ zIndex: Z_INDEX.cartDrawer }}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            style={{ zIndex: Z_INDEX.backdrop }}
            onClick={() => setCartOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-full sm:w-96 md:w-[400px] lg:w-[450px] max-w-[90vw] bg-white shadow-2xl flex flex-col"
            style={{ zIndex: Z_INDEX.backdrop + 1 }}
          >
            {/* Drawer Header */}
            <div className="bg-[#DC2626] text-white p-4 sm:p-5 md:p-6 flex items-center justify-between flex-shrink-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Your Order</h3>
              <button 
                onClick={() => setCartOpen(false)}
                className="text-white hover:text-white/80 p-2"
                aria-label="Close cart"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Cart Items - Scrollable */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 min-h-0">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-sm sm:text-base md:text-lg" style={{ fontFamily: 'system-ui, sans-serif' }}>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-[#FFFBEB] rounded-xl p-3 sm:p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2 sm:mb-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-[#DC2626] text-sm sm:text-base" style={{ fontFamily: 'Georgia, serif' }}>{item.name}</h4>
                          <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>₹{item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-400 p-1 flex-shrink-0"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DC2626] text-white font-bold hover:bg-[#B91C1C] transition-colors text-sm sm:text-base"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="font-semibold text-sm sm:text-base md:text-lg w-6 sm:w-8 text-center" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DC2626] text-white font-bold hover:bg-[#B91C1C] transition-colors text-sm sm:text-base"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-bold text-[#DC2626] text-sm sm:text-base md:text-lg" style={{ fontFamily: 'system-ui, sans-serif' }}>₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Drawer Footer - Sticky at bottom */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-3 sm:p-4 md:p-6 bg-white flex-shrink-0">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg" style={{ fontFamily: 'system-ui, sans-serif' }}>Total:</span>
                  <span className="text-[#DC2626] font-bold text-lg sm:text-xl md:text-2xl" style={{ fontFamily: 'Georgia, serif' }}>₹{cartTotal}</span>
                </div>
                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full bg-[#25D366] text-white py-2.5 sm:py-3 md:py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg shadow-lg"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  <span>Send Order via WhatsApp 🚀</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CartDrawer
