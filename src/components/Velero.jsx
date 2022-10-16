import React from "react";
import veleroImg from '../imgs/Velero.png';
import veleroInvert from '../imgs/VeleroInvert.png';
import styles from '../styles/Velero.module.css';

export default function Velero({page, unLoading}){
    return(
        <div className={page>=5?styles.mainContainerDisabled:styles.mainContainer} style={{opacity:unLoading?0:1, transitionDuration:'3000ms'}}>
            <img src={veleroImg} alt="velero.png" className={styles.velero}/>

            <img src={veleroInvert} alt="veleroInvertido.png" 
            className={styles.veleroInvert}/>

            <div className={styles.waveWrapper}>
                <div className={styles.wave1}/>
                <div className={styles.wave2}/>
                <div className={styles.wave3}/>
                <div className={styles.wave4}/>
            </div>
        </div>
    )
}