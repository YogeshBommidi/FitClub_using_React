import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from "../../data/testimonialsData"
import rigthArrow from "../../assets/rightArrow.png"
import leftArrow from "../../assets/leftArrow.png"
import { motion } from 'framer-motion'

const Testimonials = () => {
    const transition = { type: 'spring', duration: '3' }
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="Testimonials">
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>what they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    transition={transition}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}>
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: "var(--orange" }}>
                        {testimonialsData[selected].name}
                    </span>
                    <span>
                        {" - "}
                        {testimonialsData[selected].status}
                    </span>
                </span>
            </div>
            <div className='rigth-t'>
                <motion.div
                    transition={{ ...transition, duration: 2 }}
                    initial={{ opacity: '0', x: '-100' }}
                    whileInView={{ opacity: '1', x: '0' }}></motion.div>
                <motion.div
                    transition={{ ...transition, duration: 2 }}
                    initial={{ opacity: '0', x: '100' }}
                    whileInView={{ opacity: 1, x: '0' }}></motion.div>
                <motion.img
                    key={selected}
                    transition={transition}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    src={testimonialsData[selected].image} alt="" />
                <div className='arrow'>
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                        src={leftArrow} alt="" />
                    <img
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                        src={rigthArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
