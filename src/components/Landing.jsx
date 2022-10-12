import React, { useState } from "react";
import NavBar from './NavBar';
import portrait from '../imgs/portrait.png';
import Title from './Title';
import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai';
import Bars from "./Bars";
import styles from '../styles/landing.module.css';

export default function Landing(){
    const [activeIcon, setActiveIcon] = useState(4);

    return (
    <div className="bg-ska1 h-screen w-full overflow-hidden">
        {console.log(activeIcon)}
        <NavBar/>

        <div className="h-4/6 w-full flex flex-col flex-nowrap justify-between 
        flex-wrap relative md:flex-row overflow-hidden min-h-[262px] shadow-lg shadow-ska7 z-10">
            <div className="pl-0 flex flex-col justify-center z-10 md:pl-6">
                <Title/>
                
            </div>

            <div className="max-h-[300px] flex justify-end items-end md:max-h-full relative">
                <img src={portrait} alt="portrait.png" className="block h-full object-cover max-h-[700px]"/>
                <Bars/>
            </div>

            <div className={styles.iconsContainer}>
                <a href="https://github.com/MatiasFranco289" target='_blank'>
                    <BsGithub className={`mr-3 duration-300 ${activeIcon==0?'scale-[1.2]':'scale-100'}`}
                    onMouseEnter={(e) => setActiveIcon(0)} 
                    onMouseLeave={() => setActiveIcon(4)}/>
                </a>
                
                <a href="" target='_blank'>
                    <AiOutlineMail className={`mr-3 duration-300 ${activeIcon==1?'scale-[1.2]':'scale-100'}`}
                    onMouseEnter={(e) => setActiveIcon(1)} 
                    onMouseLeave={() => setActiveIcon(4)}/>
                </a>
                
                <a href="https://www.linkedin.com/in/matiasfranco289/" target='_blank'>
                    <BsLinkedin className={`mr-3 duration-300 ${activeIcon==2?'scale-[1.2]':'scale-100'}`}
                    onMouseEnter={(e) => setActiveIcon(2)} 
                    onMouseLeave={() => setActiveIcon(4)}/>
                </a>
            </div>
        </div>
        


        <div className="h-4/6 w-full flex flex-col-reverse flex-nowrap justify-between 
        flex-wrap relative md:flex-row overflow-hidden min-h-[262px]">
            
            <div className="pl-0 flex flex-col justify-center z-10 md:pl-6 opacity-0">
                <Title/>
                
            </div>

            <div className="max-h-[300px] flex justify-end items-end md:max-h-full scale-y-[-100%] blur-[3px]">
                <img src={portrait} alt="portrait.png" className="block h-full object-cover max-h-[700px]"/>
                <Bars/>
            </div>

            <div className={styles.invertedIconsContainer}>
                <BsGithub className={`mr-3 duration-300 ${activeIcon==0?'scale-[1.2]':'scale-100'}`}/>
                <AiOutlineMail className={`mr-3 duration-300 ${activeIcon==1?'scale-[1.2]':'scale-100'}`}/>
                <BsLinkedin className={`mr-3 duration-300 ${activeIcon==2?'scale-[1.2]':'scale-100'}`}/>

                <div className={styles.waveWrapper}>
                    <div className={styles.wave1}/>
                    <div className={styles.wave2}/>
                    <div className={styles.wave3}/>
                </div>
            </div>

            
        </div>
    </div>
    );
}