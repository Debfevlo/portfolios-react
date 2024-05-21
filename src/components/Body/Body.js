import React from 'react';
import './Body.css';
import bgImg from '../../assets/de.png';
import btnImg from  '../../assets/hireme.png'
import {Link} from 'react-scroll';

export default function Body(){
    return(
        <section id='Body'>
            <div className='bodyContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introBody'> Fevlo Deborah</span> <br/> A full stack developer</span>
                <p className='introPara'>I'm a skilled full stack developer with exeperience in creating visually appealing <br/> website putting into consideration user experience. </p>
                <Link> <button className='btn'> <img src={btnImg} alt='Hire Me' className='btnImg'/> Hire Me </button> </Link>
            </div>

            <img src={bgImg} alt='background profile of the developer' className='bgImg'/>
        </section>
        
    )
}