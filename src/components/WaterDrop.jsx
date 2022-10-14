import React, { useEffect, useState } from "react";
import styles from '../styles/WaterDrop.module.css';

export default function WaterDrop(){
    const [left, setLeft] = useState(0);

    function randomBetween(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function recalculate(){
        console.log('termine we');
        setLeft(randomBetween(0,300))
    }
      
    return(
    <div className={styles.waterContainer} style={{left:`${left}px`}} onAnimationEnd={() => recalculate()}>
        <div className={styles.droplet}/>
    </div>
    )
}