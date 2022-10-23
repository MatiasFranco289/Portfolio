import React, { useEffect, useState} from 'react';
import ray from '../imgs/ray.png';

export default function RayLight({left, rotation}){
    const [rays, setRays] = useState([]);

    useEffect(() => {
        setRays(generateRays());
    }, [])

    function generateRays(){
        const raysProperties = [
            {
                rayWidth: [20,60,100],
                rayDuration: [2000,3000,4000],
                rayDelay: [0,0,0]
            },
            {
                rayWidth:[20,40,60],
                rayDuration:[2000,6000,3000],
                rayDelay:[400,1000,1200]
            },
            {
                rayWidth:[20,70,100],
                rayDuration:[2000,6000,3000],
                rayDelay:[1200,800,1500]
            }

        ]

        const rayType = raysProperties[randomBetween(0,2)];
        let rays = [];

        for(let f=0;f<3;f++){
            let rayStyles = {
                WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,.1)), to(rgba(0,0,0,0)))',
                animationDuration: `${rayType.rayDuration[f]}ms`,
                animationDelay: `${rayType.rayDelay[f]}ms`,
                height: `${randomBetween(100,100)}%`,
                width: `${rayType.rayWidth[f]}%`,
            }

            rays.push(
                <img key={`${f}ray`} src={ray} alt="light.png" className='blur absolute animate-pulse' style={rayStyles}/>
            )
        }

        return(
            <div className={`absolute w-[200px] md:w-[300px] lg:w-[400px] h-full flex justify-center 
            pointer-events-none opacity-0 animate-appearMedium top-0`} 
            >
            {rays.map(ray => {return ray})}

            </div>
        )
    }

    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    return(
        rays?rays:null
    )
}