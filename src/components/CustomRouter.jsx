import React, { useState } from "react";
import styles from '../styles/NavBar.module.css';
import Landing from "./Landing";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "../components/About";

export default function CustomRouter(){
    const [activePage, setActivePage] = useState(0);
    const [unLoading, setUnloading] = useState(false);
    const [loadingRouter, setLoadingRouter] = useState(false);
    
    function Routing(){
        switch(activePage){
            case 0:
                return <Landing unLoading={unLoading} setLoadingRouter={setLoadingRouter}/>
            case 1:
                return <Contact unLoading={unLoading} setLoadingRouter={setLoadingRouter}/>
            case 2:
                return <Projects unLoading={unLoading} setLoadingRouter={setLoadingRouter}/>
            case 3:
            return <About unLoading={unLoading} setActivePage={setActivePage}/>
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
            
            <div className={styles.mainNav}>
                <div className={(unLoading || loadingRouter)?styles.navSubDisabled:styles.navSub}>
                <p className={activePage==0?styles.link_active:styles.link} onClick={() =>handleChange(4000,0)}>Home</p>
                <p className={activePage==1?styles.link_active:styles.link} onClick={() => handleChange(4000,1)}>Contacto</p>
                <p className={activePage==2?styles.link_active:styles.link} onClick={() => handleChange(4000,2)}>Proyectos</p>
                <p className={activePage==3?styles.link_active:styles.link} onClick={() => handleChange(4000,3)}>Sobre mi</p>
                </div>
            </div>

    

            {Routing()}
        </div>
    )
}