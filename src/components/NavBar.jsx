import React from "react";
import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
    <div className="w-full text-xl py-6 font-medium
    flex flex-row items-center sm:text-2xl
    sm:px-6">
        <Link to='/' className="mx-3 hover:scale-110
         hover:text-ska10 text-white duration-300">Contacto</Link>
        <Link to='/' className="mx-3 hover:scale-110
         hover:text-ska10 text-white duration-300">Proyectos</Link>
         <Link to='/' className="mx-3 hover:scale-110
         hover:text-ska10 text-white duration-300">Blog</Link>
    </div>
    );
}