import React from "react";
import styles from '../styles/WaterDrop.module.css';

export default function WaterDrop(){   
    function createWaterDrops(){
        let gotas = [];

        let top = [42,52,5,81,5];
        let left = [0,37,84,87,12];
        let scale = [25,48,33,28,74];
        let radius = [
            '73% 27% 70% 30% / 60% 30% 70% 40% ',
            '38% 62% 66% 34% / 42% 57% 43% 58% ',
            '53% 47% 66% 34% / 66% 27% 73% 34% ',
            '62% 38% 76% 24% / 64% 64% 36% 36% ',
            '38% 62% 66% 34% / 42% 57% 43% 58%'
        ]

        for(let f=0;f<5;f++){
     
            gotas.push(
                <div key={`waterDrop${f}`} className={styles.droplet} 
                style={{top:`${top[f]}%`,left:`${left[f]}%`,
                transform:`scale(${scale[f]}%)`,
                borderRadius:radius[f]}}/>
            )
        }
        
        return gotas;
    }

    return(
    <div className={styles.waterContainer}>
        {createWaterDrops()}
    </div>
    
    )
}