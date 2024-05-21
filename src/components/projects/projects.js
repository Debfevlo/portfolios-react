import React from 'react';
import './projects.css';
import project1 from '../../assets/portfolio-1.png';
import project2 from '../../assets/portfolio-2.png';
import project3 from '../../assets/portfolio-3.png';
import project4 from '../../assets/portfolio-4.png';
import project5 from '../../assets/portfolio-5.png';
import project6 from '../../assets/portfolio-6.png';


export default function Project(){
    return(
        <section id='projects'>
            <h2 className='projectTitle'> My Projects</h2>
            <span className='projectDescription'> i take pride in paying attention to the smallest details and making sure my work is excellent. I am excited to apply my skills and experience to help businesses achieve their goals and create a strong online presence
            </span>
            <div className='projectImgs'> 
                <img src={project1} alt='' className='projectImg'/>
                <img src={project2} alt='' className='projectImg'/>
                <img src={project3} alt='' className='projectImg'/>
                <img src={project4} alt='' className='projectImg'/>
                <img src={project5} alt='' className='projectImg'/>
                <img src={project6} alt='' className='projectImg'/>
            </div>
        </section>
    )
}