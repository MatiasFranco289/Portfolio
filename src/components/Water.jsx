import React, { useEffect, useRef, useState } from "react";
import velero from '../imgs/Velero.png';
import velero_inverted from '../imgs/VeleroInvert.png';
import styles from '../styles/velero.module.css';
import portrait from '../imgs/portrait.png';
import {BsLinkedin, BsWhatsapp, BsGithub} from 'react-icons/bs';

export default function Water({imgWidth}){
    const [boats, setBoats] = useState([]);
    let duration = window.innerWidth>768?[30,40,34]:[15,20,18];

    useEffect(() => {
        generateBoats(3,[]);
    }, [])

    window.addEventListener('resize', () => {
        duration = window.innerWidth>768?[30,40,34]:[15,20,18];
    })

    //Hacer que la velocidad de los barquitos sea dependiente del largo de la pantalla
    function generateBoats(quant, actualBoats){
        let newBoats = actualBoats;
        
        for(let f=0;f<quant;f++){
            let delay = [0,36,28]
            let Yposition = [0,25,40];

            newBoats.push(
            <div className={styles.veleroWrapper} style={{animationDelay:`${delay[f]}s`,top:`${Yposition[f]}px`, animationDuration:`${duration[f]}s`}} key={f}>
                <div className={styles.veleroSubWrapper}>
                    <img src={velero} alt="velero.png" />
                </div>

                <div className={styles.veleroSubWrapperInvert}>
                    <img src={velero_inverted} alt="velero.png" />
                </div>

                <div className={styles.waterWrapper}>
                    <div className={styles.ripple1}/>
                    <div className={styles.ripple2}/>
                    <div className={styles.ripple3}/>
                    <div className={styles.ripple4}/>
                    <div className={styles.ripple5}/>
                    <div className={styles.ripple6}/>
                    <div className={styles.ripple7}/>
                    <div className={styles.ripple8}/>
                    <div className={styles.ripple9}/>
                    <div className={styles.ripple10}/>
                </div>
                
            </div>
            );
        }

        setBoats(newBoats);
    }

    return(
    <div className="w-full h-[23%] relative overflow-hidden z-10 ">
        {console.log(imgWidth)}
        {boats?.map(boat => {
            return boat;
        })}

        <img src={portrait} alt="portrait.png" 
        className={`absolute top-[-5px] right-0 scale-y-[-100%] blur-[2px]`} style={{width:`${imgWidth}px`}}/>

        <div className="flex text-white text-4xl absolute top-0 right-0 lg:left-0 lg:text-6xl scale-y-[-100%] blur-[2px]">
            <BsLinkedin className="ml-3"/>
            <BsWhatsapp className="ml-3"/>
            <BsGithub className="ml-3"/>
        </div>


     

    </div>
    );
}