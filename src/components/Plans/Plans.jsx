import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur Plan-blur-l"></div>
            <div className="blur Plan-blur-r"></div>
            
            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className='stroke-text'>ready to start</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>now with us</span>
            </div>
            {/**plans */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className='feature'>
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div><span>See More Benefits -></span></div>
                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans
