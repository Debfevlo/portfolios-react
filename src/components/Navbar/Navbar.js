import React from 'react';
import './Navbar.css';
import contactImg from  '../../assets/contact.png';
import {Link} from 'react-scroll';   



export default function Navbar(){
    
    return(
        <div>
            <nav className='navbar'>
                <h3>DebbieFevlo</h3>

                <div className='menuBar'>
                    <Link activeClass='active' to='Body' spy={true} smooth={true} offset={-100} duration={500} className='navLinks'>Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className='navLinks'>About</Link>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-30} duration={500} className='navLinks'>Portfolio</Link>
                    <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-30} duration={500} className='navLinks'>Clients</Link>
                    
                </div>

                <button className='buttonMenu' onClick={() =>{
                    document.getElementById('contactPage').scrollIntoView({behaviour: 'smooth'})
                }}>
                <img src={contactImg} alt='' className='buttonMenuIcon'/> Contact Me
            </button>

                
            </nav>

            
        </div>
    );
}

