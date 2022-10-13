import React, { useState } from "react";
import portrait from '../imgs/portrait.png';
import Title from './Title';
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai';
import Bars from "./Bars";
import styles from '../styles/landing.module.css';
import iconStyles from '../styles/Icons.module.css';

export default function Landing({unLoading}){
    const [activeIcon, setActiveIcon] = useState(4);

    return (
    <div className="bg-ska1 h-screen w-full overflow-hidden">

        <div className="h-4/6 w-full flex flex-col flex-nowrap justify-between 
        flex-wrap relative md:flex-row overflow-hidden min-h-[262px] shadow-lg 
        shadow-ska7 z-10 mt-[80px]">
            <div className="pl-0 flex flex-col justify-center z-10 md:pl-6">
                <Title unLoading={unLoading}/>
                
            </div>

            <div className="max-h-[300px] flex justify-end items-end md:max-h-full relative">
                <img src={portrait} alt="portrait.png" className="block h-full object-cover max-h-[700px]"/>
                <Bars unLoading={unLoading} onWater={false}/>
            </div>

            <div className={!unLoading?iconStyles.iconsContainer:iconStyles.iconsContainerDisabled}>
                <a href="https://github.com/MatiasFranco289" target='_blank'>
                    <BsGithub className={`mr-3 duration-300 ${activeIcon==0?'scale-[1.2]':'scale-100'}`}
                    onMouseEnter={() => setActiveIcon(0)} 
                    onMouseLeave={() => setActiveIcon(4)}/>
                </a>
                
                <a href="" target='_blank'>
                    <AiOutlineMail className={`mr-3 duration-300 ${activeIcon==1?'scale-[1.2]':'scale-100'}`}
                    onMouseEnter={() => setActiveIcon(1)} 
                    onMouseLeave={() => setActiveIcon(4)}/>
                </a>
                
                <a href="https://www.linkedin.com/in/matiasfranco289/" target='_blank'>
                    <BsLinkedin className={`mr-3 duration-300 ${activeIcon==2?'scale-[1.2]':'scale-100'}`}
                    onMouseEnter={() => setActiveIcon(2)} 
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
                <Bars unLoading={unLoading} onWater={true}/>
            </div>

            <div className={!unLoading?iconStyles.invertedIconsContainer:iconStyles.invertedIconsContainerDisabled}>
                <BsGithub className={`mr-3 duration-300 ${activeIcon==0?'scale-[1.2]':'scale-100'}`}/>
                <AiOutlineMail className={`mr-3 duration-300 ${activeIcon==1?'scale-[1.2]':'scale-100'}`}/>
                <BsLinkedin className={`mr-3 duration-300 ${activeIcon==2?'scale-[1.2]':'scale-100'}`}/>

                <div className={styles.waveWrapper}>
                    <div className={styles.wave1}/>
                    <div className={styles.wave2}/>
                    <div className={styles.wave3}/>
                </div>
            </div>

            <div className="absolute left-0 top-0 w-[144px] h-[36px] ml-6 lg:w-[216px] h-[60px] flex justify-center items-center">
                <div className={!unLoading?'':styles.wave1Disabled}/>
            </div>
            
        </div>
    </div>
    );
}