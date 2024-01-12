import React from 'react'
import FeatureCard from './FeatureCard'
import Secured from "../../assets/secured.png"
import Arrow from "../../assets/arrow.png"
import Globe from "../../assets/globe.png"


const Feature = () => {

    const Data = [
        {
             
            title: "Secure Transactions",
            desc: "Experience the utmost security with our advanced payment technology.",
            icon: Secured,
            
        },
        {
            title: "Convenience Redefined",
            desc: "Say goodbye to complicated payment processes. Translink ensures a smooth and hassle-free transaction experience.",
            icon: Arrow,
            
        },
        {
            title: "Global Accessibility",
            desc: "Access your funds and make payments anytime, anywhere, with our globally available web app.",
            icon: Globe,
            
        },
    ]
  return (
    <div className=" flex-col items-center justify-center">
      <div>
        <h1 className=" flex justify-center items-center text-center text-7xl textSmall my-8 textColor">
          UNLOCKING THE POWER OF DIGITAL PAYMENTS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Data.map((feature) => (
          <div key={feature.title}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feature