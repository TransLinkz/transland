import React from 'react'
import FeatureCard from './FeatureCard'

const Feature = () => {

    const Data = [
        {
            title: "Secure Transactions",
            desc: "Experience the utmost security with our advanced payment technology."
        },
        {
            title: "Convenience Redefined",
            desc: "Say goodbye to complicated payment processes. Translink ensures a smooth and hassle-free transaction experience."
        },
        {
            title: "Global Accessibility",
            desc: "Access your funds and make payments anytime, anywhere, with our globally available web app."
        },
    ]
  return (
    <div>
        <div>
            <h1>
            UNLOCKING THE POWER OF DIGITAL PAYMENTS
            </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Data.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default Feature