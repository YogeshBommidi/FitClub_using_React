import React from 'react'
import './Hero.css'
import Header from '../../components/Header/Header'
import Heart from '../../assets/heart.png'
import Hero_Image from '../../assets/hero_image.png'
import Hero_Image_Back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = { type: 'spring', duration: '3' }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero">
            <div className="blur Hero-blur"></div>
            <div className='left-h'>
                <Header />
                {/*the best ad*/}
                <div className='the-best-ad'>
                    <motion.div
                        initial={{ left: mobile ? "160px" : "238px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/**hero heading*/}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/**figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} preFix= '+' delay="3"></NumberCounter>
                        </span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={978} start={900} preFix= '+' delay="3"></NumberCounter>
                        </span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={50} start={0} preFix= '+' delay="3"></NumberCounter>
                        </span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                {/**hero button */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className='right-h'>
                <button className="btn">Join Now</button>
                <motion.div
                    transition={{ ...transition, type: 'tween' }}
                    whileInView={{ right: '4rem' }}
                    initial={{ right: '-1rem' }} className='heart-rate'>
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/**Hero Images */}
                <img src={Hero_Image} alt="" className='hero_image' />
                <motion.img
                    transition={{ ...transition, type: 'tween' }}
                    initial={{ right: '11rem' }}
                    whileInView={{ right: "20rem" }} src={Hero_Image_Back} alt="" className='hero_image_back' />

                {/**calories */}
                <motion.div
                    transition={{ ...transition, type: 'tween' }}
                    initial={{ right: '38rem' }}
                    whileInView={{ right: '28rem' }} className="calories">
                    <img src={Calories} alt="" />
                    <div><span>Calories Burned</span><span> 220 kcal</span></div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
