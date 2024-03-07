import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8pfyzoh', 'template_hha3v17', form.current, {
                publicKey: '4-LyVcECViFPICobU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="Join" id="join">
            <div className='left-j'>
                <hr></hr>
                <div>
                    <span className='stroke-text'>ready to</span>
                    <span>level up</span>
                </div>
                <div>
                    <span>your body</span>
                    <span className='stroke-text'>with us?</span>
                </div>
            </div>
            <div className='right-j'>
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name='user_name' placeholder='Enter Your Email Address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
