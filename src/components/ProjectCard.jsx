import React from "react";
import {BsLink, BsGithub} from 'react-icons/bs';
import {DiReact, DiJavascript1, DiCss3, DiNodejsSmall, } from 'react-icons/di';
import {SiRedux, SiExpress, SiSequelize, SiPostgresql, SiAuth0, SiSocketdotio, SiPhp, SiBootstrap} from 'react-icons/si';
import {MdPayment} from 'react-icons/md';
import {AiFillYoutube, AiOutlineConsoleSql} from 'react-icons/ai';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({media, title, description, tecnologys, git, deploy, video}){
    const tecnolgysIcons = {
        'javascript':<DiJavascript1 className="mx-1" key='jsI'/>,
        'react': <DiReact className="mx-1" key='reactI'/>,
        'css': <DiCss3 className="mx-1" key='cssI'/>,
        'redux': <SiRedux className="mx-1" key='reduxI'/>,
        'node': <DiNodejsSmall className="mx-1" key='nodeI'/>,
        'express': <SiExpress className="mx-1" key='expressI'/>,
        'sequelize': <SiSequelize className="mx-1" key='sqlzI'/>,
        'postgres': <SiPostgresql className="mx-1" key='pstgrsI'/>,
        'auth0': <SiAuth0 className="mx-1" key='auth0I'/>,
        'pasarela': <MdPayment className="mx-1" key='psrlI'/>,
        'socketIo': <SiSocketdotio className="mx-1" key='scktI'/>,
        'php': <SiPhp className="mx-1" key='phpI'/>,
        'sql': <AiOutlineConsoleSql className="mx-1" key='sqlI'/>,
        'bootstrap': <SiBootstrap className="mx-1" key="bstrpI"/>
    }

    return(
        <div className={styles.mainCard}>
            
            <div className="w-full text-center mb-3 block lg:hidden">
                <h1 className="text-2xl sm:text-4xl font-bold">{title}</h1>
            </div>

            <div className="h-full flex justify-center items-center mb-3">
                <div className="sm:min-w-[300px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden
                shadow-lg shadow-ska1 w-[200px] h-[200px]">
                    <img src={media} alt="thumbnail.png" className="w-full h-full"/>
                </div>
            </div>
            

            <div className="ml-3 flex flex-col items-center justify-between grow">

                <div className="w-full text-center hidden lg:block">
                    <h1 className="text-4xl font-bold">{title}</h1>
                </div>

                <div className="mt-2 max-w-[300px] sm:max-w-full">
                    <p className="text-sm font-medium sm:text-base">{description}</p>
                </div>

                <div className="w-full flex justify-between mt-6 flex-col sm:flex-row items-center">

                    <div className="flex text-4xl mb-3 sm:mb-0 shadow">
                        <a href={deploy} target='_blank'>
                            <BsLink className="mx-2 duration-300 hover:scale-125"/>
                        </a>
                        
                        <a href={git} target='_blank'>
                            <BsGithub className="mx-2 duration-300 hover:scale-125"/>
                        </a>

                        {video!=='' &&
                        <a href={video} target='_blank'>
                        <AiFillYoutube className="mx-2 duration-300 hover:scale-125"/>
                        </a>}
                    </div>

                    <div className="flex text-xl sm:text-4xl flex-wrap sm:ml-6">
                        {tecnologys?.map(tecnology => {
                            return tecnolgysIcons[tecnology];
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}