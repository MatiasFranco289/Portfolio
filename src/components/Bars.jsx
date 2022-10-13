import React from "react";
import styles from '../styles/bars.module.css';

export default function Bars({unLoading, onWater}){

    function createWaves(){
        let waves = [];

        for(let f=0;f<10;f++){
            waves.push(
                <div key={`bar${f}`} className={f%2===0?styles.even:styles.odd} style={{animationDelay:`${randomBetween(0,1000)}ms`, animationDuration:`${randomBetween(1000,3000)}ms`}}/>
            )
        }

        return waves;
    }

    function createRain(){
        let gotas = [];
        let x = ['72%','20%','50%','48%'];
        let y = ['95%','90%','60%','30%'];
    

        for(let f=0;f<4;f++){
            gotas.push(
            <div key={`gota${f}`} className={styles.gotaWrapper} style={{top:`${y[f]}`,right:`${x[f]}`,filter:`${onWater?'blur(6px)':'blur(0px)'}`}}>
                <div className={styles.blackGota}/>
                <div className={styles.gota}/>
            </div>
            )
        }

        return gotas.map(gota => {return gota});
    }

    function randomBetween(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
      
    return(
       <div className={styles.mainWrapper}>
            {unLoading?createRain():null}
            {createWaves()}
       </div>
    );
}