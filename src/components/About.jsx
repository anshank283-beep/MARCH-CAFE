function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-[#FFB300]">MARCH</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A premium beachside gourmet burger cafe located in Unniyal, Tirur, Kerala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-[#0D0D0D] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-[#FFB300]">Our Story</h3>
              <p className="text-gray-300 mb-4">
                MARCH Cafe brings the finest gourmet burgers to the beautiful shores of Unniyal Beach. 
                We believe in using only the freshest ingredients, locally sourced whenever possible, 
                to create unforgettable culinary experiences.
              </p>
              <p className="text-gray-300">
                Whether you're here for a romantic sunset dinner, a family gathering, or a quick bite 
                with friends, our beachfront location offers the perfect backdrop for any occasion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0D0D0D] rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-4xl font-bold text-[#FFB300] mb-2">4.5</p>
              <p className="text-gray-400">Star Rating</p>
            </div>
            <div className="bg-[#0D0D0D] rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-4xl font-bold text-[#FFB300] mb-2">42+</p>
              <p className="text-gray-400">Reviews</p>
            </div>
            <div className="bg-[#0D0D0D] rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-4xl font-bold text-[#FFB300] mb-2">100%</p>
              <p className="text-gray-400">Fresh Meat</p>
            </div>
            <div className="bg-[#0D0D0D] rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-4xl font-bold text-[#FFB300] mb-2">24/7</p>
              <p className="text-gray-400">Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
