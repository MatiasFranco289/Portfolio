import React, { useState } from "react";
import styles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import LaReservaThumbnail from '../imgs/LaReservaThumbnail.png';
import PokemonThumbnail from '../imgs/PokemonThumbnail.png';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';

export default function Projects(){
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
        banear usuarios y gestionar las reviews de los mismos."
    ]

    const cards = [
        <ProjectCard title='Pokemon' media={PokemonThumbnail} 
        description={descriptions[0]} 
        tecnologys={['javascript','react','css','redux','node','express','sequelize','postgres']}
        deploy='https://pokemon289.herokuapp.com'
        git='https://github.com/MatiasFranco289/PI-Pokemon-main'
        video='https://youtube.com'/>,
        <ProjectCard title='La Reserva' media={LaReservaThumbnail} 
        description={descriptions[1]}
        tecnologys={['javascript','react','css','redux','node','express','sequelize','postgres','auth0','socketIo','pasarela']}
        deploy='https://lareserva-frontend.herokuapp.com'
        git='https://github.com/CristianLarrauri/LaReserva'
        video='https://youtube.com/'/>
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
    <div className="bg-ska1 w-screen h-screen overflow-hidden">

        <div className={styles.oldPage}>
            <div className="h-4/6 w-full flex flex-col flex-nowrap justify-between 
            flex-wrap relative md:flex-row overflow-hidden min-h-[262px] shadow-lg 
            shadow-ska7 z-10 mt-[80px]"/>
        </div>
        
        <div className={styles.mainWrapper}>
            <div className={styles.centralWrapper}>
                
                <div className="h-screen absolute bottom-0 flex justify-center items-center">

                    <button className={`text-4xl ${actualCard<=0?'text-ska9':'text-white'} 
                    ${actualCard<=0?'pointer-events-none':'pointer-events-all'}`} 
                    onClick={() => previousCard()}>
                        <AiOutlineLeft/>
                    </button>

                    {cards[actualCard]}

                    <button className={`text-4xl ${actualCard >= cards.length-1?'text-ska9':'text-white'}
                    ${actualCard >= cards.length-1?'pointer-events-none':'pointer-events-all'}`}>
                        <AiOutlineRight onClick={() => nextCard()}/>
                    </button>
                </div>
            
            </div>
        </div>
    </div>
        
    )
}