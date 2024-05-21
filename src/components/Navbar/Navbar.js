import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from  '../../assets/contact.png'
import {Link} from 'react-scroll';



export default function Navbar(){
    return(
        <div>
            <nav className='navbar'>
                <img src={logo} alt='logo' className='logo'/>

                <div className='menuBar'>
                    <Link className='navLinks'>Home</Link>
                    <Link className='navLinks'>About</Link>
                    <Link className='navLinks'>Portfolio</Link>
                    <Link className='navLinks'>Clients</Link>
                    
                </div>

                <button className='buttonMenu'>
                <img src={contactImg} alt='' className='buttonMenuIcon'/> Contact Me
            </button>

            </nav>

            
        </div>
    );
}

