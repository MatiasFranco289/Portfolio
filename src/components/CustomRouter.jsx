import React, { useState } from "react";
import styles from '../styles/NavBar.module.css';
import Landing from "./Landing";
import Contact from "./Contact";

export default function CustomRouter(){
    const [activePage, setActivePage] = useState(0);
    const [unLoading, setUnloading] = useState(false);

    function Routing(){
        switch(activePage){
            case 0:
                return <Landing unLoading={unLoading}/>
            case 1:
                return <Contact unLoading={unLoading}/>
        }
    }

    function handleChange(time, page){
        setUnloading(true);

        setTimeout(() => {
            setUnloading(false);
            setActivePage(page);
        },time);
    }

    return(
        <div>
            <div className={`w-full text-xs py-6 font-medium
            flex flex-row items-center sm:text-2xl sm:px-6 
            animate-appear absolute top-0 left-0 ${unLoading?
            'pointer-events-none':null} opacity-0`}>
                <p className={activePage==0?styles.link_active:styles.link} onClick={() => handleChange(100,0)}>Home</p>
                <p className={activePage==1?styles.link_active:styles.link} onClick={() => handleChange(4000,1)}>Contacto</p>
                <p className={activePage==2?styles.link_active:styles.link} onClick={() => handleChange()}>Proyectos</p>
                <p className={activePage==3?styles.link_active:styles.link} onClick={() => handleChange()}>Sobre mi</p>
            </div>

            {Routing()}
        </div>
    )
}