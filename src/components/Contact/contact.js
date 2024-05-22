import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png' ;
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';


export default function Contact(){
    return(
        <section id='contactPage'>
            <div className='client'>
                <h1 className='clientTitle'> My Clients</h1>
                <p className='clientDescription'>I have had the opportunity to work with some diverse group of companies. Some of the great and notable companies i have worked with include</p>
                <div className='clientImgs'>
                    <img src={Walmart} alt='' className='clientImg'/>
                    <img src={Microsoft} alt='' className='clientImg'/>
                    <img src={Adobe} alt='' className='clientImg'/>
                    <img src={Facebook} alt='' className='clientImg'/>
                </div>
                
            </div>

            <div id='Contact'>
                <h1 className='clientTitle'> Contact Me </h1>
                <span className='contactDescriiption'> Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm'>
                    <input type='text' placeholder='Your Name' className='name'/>
                    <input type='email' placeholder='Your Email' className='email'/>
                
                    <textarea name='message' rows='5' placeholder='Type your message' className='msg'></textarea>
                </form>
            </div>
        </section>
    )
}