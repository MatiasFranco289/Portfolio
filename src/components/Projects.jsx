import React, { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import LaReservaThumbnail from '../imgs/LaReservaThumbnail.png';
import PokemonThumbnail from '../imgs/PokemonThumbnail.png';
import EquipamientosThumbnail from '../imgs/EquipamientoEsperanzaThumbnail.png';
import MistApiThumbnail from '../imgs/MistApiThumbnail.png';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';
import RayLight from "./RayLight";

export default function Projects({unLoading, setLoadingRouter}){

    useEffect(() => {
        setLoadingRouter(true);

        setTimeout(() => {
            setLoadingRouter(false);
        },4000);
    }, [])

    const [actualCard, setActualCard] = useState(0);
    
    const descriptions = [
        "Pagina web centrada en Pokemons.Consta de una pagina principal desde donde podremos \
        visualizar una lista de Pokemons paginados traidos tanto desde la api externa PokeApi como de la propia.\
        Esta misma pagina cuenta con filtros combinados y una barra de busqueda que nos permitiran encontrar\
        facilmente el Pokemon que estamos buscando y acceder asi a su pagina detalle donde se muestra toda su informacion.\
        Si no encontraste lo que buscabas tambien contas con una pagina de creacion, donde rellenando un formulario podes crear tu propio pokemon\
        y verlo mas tarde reflejado en la pagina de inicio o detalle.",
        "Consta de una web orientada a un complejo deportivo, en la cual se facilita la inscripción a torneos de futbol por parte de los usuarios\
        registrados que luego podrán recibir notificaciones y acceder a datos sobre el torneo, como una tabla de goleadores, tabla de equipos, fixture, etc.\
        Por parte de los administradores, la web permite modificar diversos datos sobre torneos, eliminar o inhabilitar los mismos asi como crear nuevos,\
        banear usuarios y gestionar las reviews de los mismos.",
        'Equipamientos Esperanza es un sitio web creado como  una plantilla para un E-Commerce construido \
        utilizando principalmente PHP y SQL.',
        'Esto es una RESTful API creada con Node, Express y Mysql orientada a Mistborn era 1; Una serie de libros escritos por el autor estadounidense Brandon Sanderson.'
    ]

    const cards = [
        <ProjectCard title='Pokemon' media={PokemonThumbnail} 
        description={descriptions[0]} 
        tecnologys={['javascript','react','css','redux','node','express','sequelize','postgres']}
        deploy='https://pokemon289.herokuapp.com'
        git='https://github.com/MatiasFranco289/PI-Pokemon-main'
        video='https://www.youtube.com/watch?v=SKm7kD9jIcI'/>,
        <ProjectCard title='La Reserva' media={LaReservaThumbnail} 
        description={descriptions[1]}
        tecnologys={['javascript','react','css','redux','node','express','sequelize','postgres','auth0','socketIo','pasarela']}
        deploy='https://lareserva-frontend.herokuapp.com'
        git='https://github.com/CristianLarrauri/LaReserva'
        video='https://www.youtube.com/watch?v=Bu6TwkF7WDE'/>,
        <ProjectCard title='Equipamientos Esperanza' media={EquipamientosThumbnail}
        description={descriptions[2]}
        tecnologys={['php','javascript','css','bootstrap','sql']}
        deploy='https://equipamientos-esperanza.000webhostapp.com'
        git='https://github.com/MatiasFranco289/Equipamientos-esperanza'
        video=''/>,
        <ProjectCard title='Mist API' media={MistApiThumbnail}
        description={descriptions[3]}
        tecnologys={['javascript','node','express','auth0','sql','css']}
        deploy='https://mistborn-api-production.up.railway.app/'
        git='https://github.com/MatiasFranco289/Mistborn-API'
        video=''/>
    ]

    function nextCard(){
        if(actualCard+1 >= cards.length) return;
        setActualCard(actualCard + 1);
    }

    function previousCard(){
        if(actualCard <= 0) return;
        setActualCard(actualCard - 1);
    }


    return(
    <div className="bg-ska1 w-screen h-screen relative overflow-hidden">

        <div className={!unLoading?styles.oldPage:styles.oldPageDisabled}>
            <div className="h-4/6 w-full flex flex-col flex-nowrap justify-between 
            flex-wrap relative md:flex-row overflow-hidden min-h-[262px] shadow-lg 
            shadow-ska7 z-10 mt-[80px]"/>
        </div>
        
        <div className={!unLoading?styles.mainWrapper:styles.mainWrapperDisabled}>
            <div className={!unLoading?styles.centralWrapper:styles.centralWrapperDisabled}>

                <div className="h-screen bottom-0 flex flex-col justify-center items-center">

                    <div className="min-h-[100px]"></div>

                    <div className="flex">
                        
                    <button className={`text-4xl ${actualCard<=0?'text-ska9':'text-white'} 
                    ${actualCard<=0?'pointer-events-none':'pointer-events-all'} min-w-[36px]`} 
                    onClick={() => previousCard()}>
                        <AiOutlineLeft/>
                    </button>

                    {cards[actualCard]}

                    <button className={`text-4xl ${actualCard >= cards.length-1?'text-ska9':'text-white'}
                    ${actualCard >= cards.length-1?'pointer-events-none':'pointer-events-all'} min-w-[36px]`}>
                        <AiOutlineRight onClick={() => nextCard()}/>
                    </button>
                    </div>
                </div>
            
            </div>
        </div>

        <div className={`${!unLoading?'opacity-1':'opacity-0'} duration-1000`}>
        <RayLight left={1} rotation={5}/>
        <RayLight left={20} rotation={5} />

        <RayLight left={49} rotation={2} />
        <RayLight left={65} rotation={-10}/>

        <RayLight left={80} rotation={-15} />
        </div>
        




    </div>
        
    )
}