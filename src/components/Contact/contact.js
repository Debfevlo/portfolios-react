import React, {useRef} from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png' ;
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import tweeterIcon from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';



export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_htw3s2m', 'template_2u662vi', form.current, {
        publicKey: 'c_cV18103OwzHHZqi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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

            <div id='contact'>
                <h1 className='clientTitle'> Contact Me </h1>
                <span className='contactDescriiption'> Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Your Name' name='your_name' className='name'/>
                    <input type='email' placeholder='Your Email' name='your_email' className='email'/>
                    <textarea name='message' rows='5' placeholder='Type your message' className='msg'></textarea>
                    <button type='submit' value='Send' className='Button'>Submit</button>
                    
                    <div className='links'>
                        <img src={facebookIcon} alt='Facebook Icon' className='link'/>
                        <img src={tweeterIcon} alt='Tweeter Icon' className='link'/>
                        <img src={instagramIcon} alt=' Instagram icon' className='link'/>
                    </div>
                </form>
            </div>
        </section>
    )
}