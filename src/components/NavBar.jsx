import React from "react";
import {Link} from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

export default function NavBar(){
    return(
    <div className="w-full text-xl py-6 font-medium
    flex flex-row items-center sm:text-2xl
    sm:px-6 animate-appear">
        <Link to='/' className={styles.link}>Contacto</Link>
        <Link to='/' className={styles.link}>Proyectos</Link>
        <Link to='/' className={styles.link}>Blog</Link>
    </div>
    );
}