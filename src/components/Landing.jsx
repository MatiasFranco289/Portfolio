import React from "react";
import NavBar from './NavBar';
import portrait from '../imgs/portrait.png';
import Title from './Title';
import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'

export default function Landing(){
    return (
    <div className="bg-ska1 h-screen w-full overflow-hidden">
        <NavBar/>

        <div className="h-4/6 w-full flex flex-col flex-nowrap justify-between 
        flex-wrap relative md:flex-row overflow-hidden min-h-[262px] shadow-xl shadow-ska7">
            <div className="pl-0 flex flex-col justify-center z-10 md:pl-6">
                <Title/>
                
            </div>

            <div className="max-h-[300px] flex justify-end items-end md:max-h-full">
                <img src={portrait} alt="portrait.png" className="block h-full object-cover max-h-[700px]"/>
            </div>

            <div className="text-white text-4xl flex absolute bottom-0 left-0 ml-6 lg:text-6xl">
                <BsGithub className="mr-3"/>
                <BsWhatsapp className="mr-3"/>
                <BsLinkedin/>
            </div>
        </div>
        


        <div className="h-4/6 w-full flex flex-col-reverse flex-nowrap justify-between 
        flex-wrap relative md:flex-row overflow-hidden min-h-[262px]">
            
            <div className="pl-0 flex flex-col justify-center z-10 md:pl-6 opacity-0">
                <Title/>
                
            </div>

            <div className="max-h-[300px] flex justify-end items-end md:max-h-full scale-y-[-100%] blur-[3px]">
                <img src={portrait} alt="portrait.png" className="block h-full object-cover max-h-[700px]"/>
            </div>

            <div className="text-white text-4xl flex absolute top-0 left-0 ml-6 lg:text-6xl scale-y-[-100%] blur-[3px]">
                <BsGithub className="mr-3"/>
                <BsWhatsapp className="mr-3"/>
                <BsLinkedin/>
            </div>
        </div>
    </div>
    );
}