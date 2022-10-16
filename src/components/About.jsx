import Velero from "./Velero"
import TypeMe, { LineBreak, Delay } from 'react-typeme';
import {BiSkipNext} from 'react-icons/bi';
import { useState } from "react";

export default function About({unLoading, setActivePage}){
    const [page, setPage] = useState(0);
    
    function nextPage(){
        if(page === 4){
            setTimeout(() => {
                setActivePage(0);
            },8000);
        }
        setPage(page + 1);
    }

    return (
        <div className="bg-ska1 h-screen w-full overflow-hidden">

        <div className="h-4/6 w-full flex flex-nowrap justify-between 
        flex-wrap relative overflow-hidden min-h-[262px] shadow-lg 
        shadow-ska7 z-10 mt-[80px]">
            
            <div style={{color:'white',transform: `translateX(-${page*100}vw)`,transitionDuration: '2000ms',display:'flex', opacity:!unLoading?1:0}}>

                <div className="w-screen h-full flex justify-center items-end text-4xl font-bold">   

                    <TypeMe typingSpeed='300' className='text-center p-3 mb-3'>
                        Hola soy Matias.
                        <Delay ms={700}/>
                        <LineBreak/>
                        Un desarrollador web nacido en Argentina.
                    </TypeMe>
    
                </div>

                <div className="w-screen h-full flex justify-center items-end text-4xl font-bold">

                    {page>=1?
                    <TypeMe typingSpeed='500' className='text-center p-3 mb-3'>
                    <Delay ms={2000}/>
                    Desde siempre he disfrutado los temas relacionados con la tecnologia.
                    <LineBreak/>
                    Mi pasion nacio desde muy pequeño, cuando descubri como hacer paginas usando html y un bloc de notas y desde entonces nunca he parado.
                    </TypeMe>:null}

                </div>

                <div className="w-screen h-full flex justify-center items-end text-4xl font-bold">

                    {page>=2?
                    <TypeMe typingSpeed='500' className='text-center p-3 mb-3'>
                    <Delay ms={2000}/>
                    He creado  infinidad de paginas, modelado en 3d, trabajado en algunos juegos y hasta he creado pequeños robots usando arduino.
                    <LineBreak/>
                    Todo esto lo he hecho siempre como hobby y aprendiendo por mi cuenta, es por eso que me considero un autodidacta.
                    </TypeMe>:null}

                </div>

                <div className="w-screen h-full flex justify-center items-end text-4xl font-bold">

                    {page>=3?
                    <TypeMe typingSpeed='500' className='text-center p-3 mb-3'>
                    No fue hasta el 2022 que decidi dedicarme a esto de manera profesional y entre en un Bootcamp donde aprendi muchas cosas nuevas e interesantes.
                    </TypeMe>:null}

                </div>

                <div className="w-screen h-full flex justify-center items-end text-4xl font-bold">

                    {page>=4?
                    <TypeMe typingSpeed='500' className='text-center p-3 mb-3'>
                    Mi foco principal en estos dias es crear sitios webs unicos y sorprendentes y por eso me mantengo siempre en movimiento y aprendiendo
                    para crear cosas cada vez mejores.
                    </TypeMe>:null}

                </div>

                <div className="w-screen h-full flex justify-center items-end text-4xl font-bold">

                </div>
            </div>
            
        </div>
        


        <div className="h-4/6 w-full flex flex-col-reverse flex-nowrap justify-between 
        flex-wrap relative md:flex-row overflow-hidden min-h-[262px] text-white">
           <Velero page={page} unLoading={unLoading}/>
           <div style={{color:'white',transform: `translateX(-${page*100}vw)`,transitionDuration: '2000ms',display:'flex',opacity:!unLoading?1:0}}
            className='absolute top-0'>

                <div className="w-screen flex justify-center items-start">
                    <TypeMe typingSpeed='300' className='text-center z-20 text-4xl font-bold scale-y-[-100%] blur-[3px] mt-3 p-3'>
                        Hola soy Matias.
                        <Delay ms={700}/>
                        <LineBreak/>
                        Un desarrollador web nacido en Argentina.
                    </TypeMe>
                </div>


                <div className="w-screen flex justify-center items-start">
                    {page>=1?
                    <TypeMe typingSpeed='500' className='text-center z-20 text-4xl font-bold scale-y-[-100%] blur-[3px] mt-3 p-3'>
                    <Delay ms={2000}/>
                    Desde siempre he disfrutado los temas relacionados con la tecnologia.
                    <LineBreak/>
                    Mi pasion nacio desde muy pequeño, cuando descubri como hacer paginas usando html y un bloc de notas y desde entonces nunca he parado.
                    </TypeMe>:null}
                </div>

                <div className="w-screen flex justify-center items-start">
                    {page>=2?
                    <TypeMe typingSpeed='500' className='text-center z-20 text-4xl font-bold scale-y-[-100%] blur-[3px] mt-3 p-3'>
                    <Delay ms={2000}/>
                    He creado  infinidad de paginas, modelado en 3d, trabajado en algunos juegos y hasta he creado pequeños robots usando arduino.
                    <LineBreak/>
                    Todo esto lo he hecho siempre como hobby y aprendiendo por mi cuenta, es por eso que me considero un autodidacta.
                    </TypeMe>:null}
                </div>

                <div className="w-screen flex justify-center items-start">
                    {page>=3?
                    <TypeMe typingSpeed='500' className='text-center z-20 text-4xl font-bold scale-y-[-100%] blur-[3px] mt-3 p-3'>
                    No fue hasta el 2022 que decidi dedicarme a esto de manera profesional y entre en un Bootcamp donde aprendi muchas cosas nuevas e interesantes.
                    </TypeMe>:null}
                </div>
                
                <div className="w-screen flex justify-center items-start">
                    {page>=4?
                    <TypeMe typingSpeed='500' className='text-center z-20 text-4xl font-bold scale-y-[-100%] blur-[3px] mt-3 p-3'>
                    Mi foco principal en estos dias es crear sitios webs unicos y sorprendentes y por eso me mantengo siempre en movimiento y aprendiendo
                    para crear cosas cada vez mejores.
                    </TypeMe>:null}
                </div>

                <div className="w-screen flex justify-center items-start">
                        
                </div>
            </div>


            <button className={`bg-ska5 w-[150px] rounded-full flex justify-center
                shadow shadow-ska1 animate-bounce absolute right-auto md:right-0 top-[60px] text-4xl
                ${(page>=5 || unLoading)?'opacity-0':'opacity-1'} ${page>=5?'pointer-events-none':
                'pointer-events-all'} duration-500`}
                onClick={() => nextPage()}>
                <BiSkipNext className="text-white"/>
            </button>

        </div>
    </div>
    )
}