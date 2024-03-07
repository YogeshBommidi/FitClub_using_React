import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import rigthArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/**header */}
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            {/**categories */}
            <div className="program-Category">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                            <img src={rigthArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs

