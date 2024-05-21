import React from 'react';
import './skills.css';
import uiDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png';

export default function Skills(){
    return(
        <section id='skills'>
            <span className='skillsTitle'> What I do</span>
            <span className='skillsDescription'>I am a skilled and Passionate fullstack developer with experience in both backend and frontend web design. i also have an upper han to understand user experience because i am a great UX Designer. I have a strong understanding of design and a keen eye for details.I am proficient in HTML, CSS, JAVASCRIPT, REACT</span>
            <div className='skillsBars'>
                <div className='skillsBar'>
                    <img src= {uiDesign} alt='Ui Design' className='skillsBarImg'/>
                    <div className='skillsBarText'>
                        <h2>UI/UX DEISN</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>

                <div className='skillsBar'>
                    <img src= {webDesign} alt='Web Design' className='skillsBarImg'/>
                    <div className='skillsBarText'>
                        <h2>Full stack developer</h2>
                        <p> This is a demo text</p>
                    </div>
                </div>

                <div className='skillsBar'>
                    <img src= {appDesign} alt='App Design' className='skillsBarImg'/>
                    <div className='skillsBarText'>
                        <h2> App design</h2>
                        <p> This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}