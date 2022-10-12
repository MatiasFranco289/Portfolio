import React from "react";
import styles from '../styles/bars.module.css';

export default function Bars(){

    function createWaves(){
        let waves = [];

        for(let f=0;f<10;f++){
            waves.push(
                <div className={f%2===0?styles.even:styles.odd} style={{animationDelay:`${randomBetween(0,1000)}ms`, animationDuration:`${randomBetween(1000,3000)}ms`}}/>
            )
        }

        return waves;
    }

    function randomBetween(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
      
    return(
       <div className={styles.mainWrapper}>
            {createWaves()}
       </div>
    );
}