import React from 'react'

const PricingCards = () => {
  return (
    <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Choose Your Plan</h2>
        <p className="mt-2 text-lg text-gray-600">Simple pricing, no hidden fees.</p>
      </div>
  
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* <!-- Card 1 --> */}
        <div className="relative bg-white rounded-lg shadow-md border border-gray-200 p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          {/* <!-- Tag --> */}
          <div className="absolute top-0 right-0">
            <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md">Top Selling</span>
          </div>
  
          <h3 className="text-xl font-semibold text-gray-800">1 Month</h3>
          <p className="text-sm text-gray-500 mt-2">
            Enjoy all features with no commitment. Great for trying us out.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><strong className="text-gray-800">✔</strong> Access to all tools</li>
            <li><strong className="text-gray-800">✔</strong> 24/7 Customer Support</li>
            <li><strong className="text-gray-800">✔</strong> Insights Dashboard</li>
            <li><strong className="text-gray-800">✔</strong> Limited API Access</li>
          </ul>
          <div className="mt-6 text-center">
            <span className="text-3xl font-bold text-blue-600">$45</span>
            <span className="text-sm text-gray-500">/mo</span>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">Create Account</button>
        </div>
  
        {/* <!-- Card 2 --> */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800">6 Months</h3>
          <p className="text-sm text-gray-500 mt-2">
            Save more with our semi-annual plan. Best for scaling teams.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><strong className="text-gray-800">✔</strong> Everything in 1 month</li>
            <li><strong className="text-gray-800">✔</strong> Advanced Analytics</li>
            <li><strong className="text-gray-800">✔</strong> Higher API limits</li>
            <li><strong className="text-gray-800">✔</strong> Priority support</li>
          </ul>
          <div className="mt-6 text-center">
            <span className="text-3xl font-bold text-blue-600">$140</span>
            <span className="text-sm text-gray-500">/6 months</span>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">Create Account</button>
        </div>
  
        {/* <!-- Card 3 --> */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800">12 Months</h3>
          <p className="text-sm text-gray-500 mt-2">
            Best value for long-term users. Unlock every feature.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><strong className="text-gray-800">✔</strong> Everything in 6 months</li>
            <li><strong className="text-gray-800">✔</strong> Free API extensions</li>
            <li><strong className="text-gray-800">✔</strong> Custom onboarding</li>
            <li><strong className="text-gray-800">✔</strong> Dedicated support</li>
          </ul>
          <div className="mt-6 text-center">
            <span className="text-3xl font-bold text-blue-600">$210</span>
            <span className="text-sm text-gray-500">/year</span>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">Create Account</button>
        </div>
      </div>
    </div>
  </section> 
  
  )
}

export default PricingCards