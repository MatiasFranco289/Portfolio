import React, {useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {AiOutlineLoading} from 'react-icons/ai';
import WaterDrop from "./WaterDrop";
import styles from '../styles/Contact.module.css';

export default function Contact({unLoading, setLoadingRouter}){
    const [inputs, setInputs] = useState({name:'',email:'',msg:''});
    const [errors, setErrors] = useState({name:'',email:'',msg:''})
    const [popUp, setPopUp] = useState({title:'',msg:''});
    const [loading, setLoading] = useState(false);
    const [btnHover, setBtnHover] = useState(false);
    
    useEffect(() => {
        setLoadingRouter(true);

        setTimeout(() => {
            setLoadingRouter(false);
        },3000)
    },[]);

    function handleFieldChange(e){
        validate(e.target.value, e.target.id);
        setInputs({...inputs, [e.target.id]:e.target.value})
    }

    function validate(text, id){
        switch(id){
            case 'name':
                validateName(text);
            break;
            case 'email':
                validateEmail(text);
            break;
            default:
                validateMessage(text)
            break;
        }
    }

    function validateName(name){
        if(!name.length) return setErrors({...errors, name: 'Este campo no puede estar vacio.'})
        if(!/^[A-Z]+$/i.test(name)) return setErrors({...errors, name: 'Solo se permiten letras.'})
        return setErrors({...errors, name: ''})
    }

    function validateEmail(email){
        if(!email.length) return setErrors({...errors, email: 'Este campo no puede estar vacio.'})
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase())) return setErrors({...errors, email: 'Debe ser un email valido.'})
        return setErrors({...errors, email: ''});
    }

    function validateMessage(msg){
        if(!msg.length) return setErrors({...errors, msg: 'Este campo no puede estar vacio.'})
        return setErrors({...errors, msg: ''})
    }

    function handleSubmit(e){
        e.preventDefault();
        
        setLoading(true);

        if(errors.name || errors.email || errors.msg || !inputs.name || !inputs.email || !inputs.msg){
            setLoading(false);
            
            setPopUp({
                title:'Error',
                msg:'Alguno de los campos esta incompleto o tiene errores.'
            });
        }
        else{
            emailjs.sendForm(process.env.REACT_APP_MAIL_KEY,process.env.REACT_APP_MAIL_TEMPLATE,e.target,process.env.REACT_APP_MAIL_API_KEY)
            .then(() => {
                setLoading(false);

                setPopUp({
                    title:'Exito!',
                    msg:'Tu mensaje ha sido enviado correctamente. Te respondere en breve!'
                });

                setInputs({
                    name:'',
                    email:'',
                    msg:''
                })
            })
            .catch(() => {
                setLoading(false);
                setPopUp({
                    title:'Error!',
                    msg:'Tu mensaje no ha podido ser enviado.Intenta nuevamente mas tarde.'
                });
            })

            
        }
        
        
    }

    return(
        <div className="bg-ska1 h-screen w-full overflow-hidden">
        
        <div className={`w-screen h-screen fixed bg-white/[.3] backdrop-blur z-20
        flex justify-center items-center ${popUp.title.length?'pointer-events-auto':'pointer-events-none'}
        ${popUp.title.length?'opacity-1':'opacity-0'} duration-500`}>

            <div className={`bg-ska4 w-[280px] h-[220px] p-3 flex flex-col justify-between
            shadow shadow-ska1 ${popUp.title.length?'opacity-1':'opacity:0'} duration-1000
            sm:w-[400px]`}>
                
                <div className="w-full text-center">
                    <h2 className="text-4xl font-bold text-white">{popUp.title}</h2>
                </div>

                <div className="text-white text-center font-medium text-lg sm:text-xl">
                    <p>{popUp.msg}</p>
                </div>

                <div className="w-full flex justify-center">
                    <button className="bg-ska1 text-white w-3/6 py-3 rounded-full
                    font-bold duration-300 hover:scale-110 mb-3 shadow shadow-ska1
                    hover:bg-ska6"
                    onClick={() => setPopUp({title:'',msg:''})}>
                        Ok
                    </button>
                </div>
            </div>
        </div>

        <div className="h-4/6 w-full flex flex-col flex-nowrap justify-between 
        flex-wrap relative md:flex-row overflow-hidden min-h-[262px] shadow-lg 
        shadow-ska7 z-10 mt-[80px]">
            <form onSubmit={(e) => handleSubmit(e)} className={!unLoading?styles.mainForm:styles.mainFormDisabled}>
                <WaterDrop/>
                <h1 className="text-4xl font-bold mb-3">Contacto</h1>

                <div className="w-full flex flex-col items-center">

                    <div className="w-full flex flex-col items-center my-3 mb-6 md:flex-row 
                    md:justify-between md:items-stretch relative">
                        <label htmlFor="" className="text-xl mb-1">Nombre</label>
                        <input type="text" id='name' name='name' value={inputs.name} 
                        onChange={(e) => handleFieldChange(e)} 
                        className="w-5/6 bg-ska6 text-white shadow shadow-ska1 outline-none pl-1"/>

                        {errors.name?
                        <div className="bg-red-700 p-1 font-medium transition-300 mt-2 absolute
                         bottom-[-35px] right-auto md:right-0 text-sm sm:text-base">
                            <p>{errors.name}</p>
                        </div>:
                        null}
                    </div>

                    <div className="w-full flex flex-col items-center my-3 mb-6 md:flex-row md:justify-between md:items-stretch relative">
                        <label htmlFor="" className="text-xl mb-1">Email</label>
                        <input type="text" id='email' name='name' value={inputs.email} 
                        onChange={(e) => handleFieldChange(e)} 
                        className="w-5/6 bg-ska6  text-white shadow shadow-ska1 outline-none pl-1"/>

                        {errors.email?
                        <div className="bg-red-700 p-1 font-medium transition-300 mt-2 absolute
                         bottom-[-35px] right-auto md:right-0 text-sm sm:text-base">
                            <p>{errors.email}</p>
                        </div>:
                        null}
                    </div>

                    <div className="w-full flex flex-col items-center my-3 mb-6 md:flex-row md:justify-between md:items-stretch relative">
                        <label htmlFor="" className="text-xl mb-1">Mensaje</label>
                        <textarea type="text" id='msg' name='msg' value={inputs.msg} 
                        onChange={(e) => handleFieldChange(e)} 
                        className="w-5/6 bg-ska6 text-white max-h-[200px]
                        shadow shadow-ska1 outline-none pl-1 pt-1 h-[10vh] md:h-[20vh]"/>

                        {errors.msg?
                        <div className="bg-red-700 p-1 font-medium transition-300 mt-2 absolute
                         bottom-[-35px] right-auto md:right-0 text-sm sm:text-base">
                            <p>{errors.msg}</p>
                        </div>:
                        null}
                    </div>
                    
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="w-5/6 flex justify-center">
                            <button className={`text-xl font-medium
                            rounded-full w-4/6 md:w-2/6 py-1 md:py-3 my-3 duration-300 
                            ${btnHover?'scale-110':'scale-100'} ${btnHover?'bg-ska6':'bg-ska1'} 
                            shadow-ska1 ${!loading?'shadow':null}
                            ${!loading?'bg-ska1':'bg-transparent'} flex justify-center
                            ${!loading?'pointer-events-auto':'pointer-events-none'} duration-300`}
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}>
                                {!loading?'Enviar':<AiOutlineLoading className="animate-spin"/>}
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
        

        <div className="h-4/6 w-full flex flex-col-reverse flex-nowrap justify-between 
        flex-wrap relative md:flex-row overflow-hidden min-h-[262px]">
            
            {!unLoading?<div className={styles.waterWave}/>:null}
            {unLoading?<div className={styles.waterWave}/>:null}

            {!unLoading?<div className={styles.waterWave2}/>:null}
            {unLoading?<div className={styles.waterWave2}/>:null}

            

            <form onSubmit={(e) => handleSubmit(e)} className={!unLoading?styles.mainFormInverted:styles.mainFormInvertedDisabled}>
                <WaterDrop/>
                <h1 className="text-4xl font-bold mb-3">Contacto</h1>

                <div className="w-full flex flex-col items-center">

                    <div className="w-full flex flex-col items-center my-3 mb-6 md:flex-row 
                    md:justify-between md:items-stretch relative">
                        <label htmlFor="" className="text-xl mb-1">Nombre</label>
                        <input type="text" id='name' name='name' value={inputs.name} 
                        onChange={(e) => handleFieldChange(e)} 
                        className="w-5/6 bg-ska6 text-white shadow shadow-ska1 outline-none pl-1 pointer-events-none"/>

                        {errors.name?
                        <div className="bg-red-700 p-1 font-medium transition-300 mt-2 absolute
                         bottom-[-35px] right-auto md:right-0 text-sm sm:text-base">
                            <p>{errors.name}</p>
                        </div>:
                        null}
                    </div>

                    <div className="w-full flex flex-col items-center my-3 mb-6 md:flex-row md:justify-between md:items-stretch relative">
                        <label htmlFor="" className="text-xl mb-1">Email</label>
                        <input type="text" id='email' name='name' value={inputs.email} 
                        onChange={(e) => handleFieldChange(e)} 
                        className="w-5/6 bg-ska6  text-white shadow shadow-ska1 outline-none pl-1 pointer-events-none"/>

                        {errors.email?
                        <div className="bg-red-700 p-1 font-medium transition-300 mt-2 absolute
                         bottom-[-35px] right-auto md:right-0 text-sm sm:text-base">
                            <p>{errors.email}</p>
                        </div>:
                        null}
                    </div>

                    <div className="w-full flex flex-col items-center my-3 mb-6 md:flex-row md:justify-between md:items-stretch relative">
                        <label htmlFor="" className="text-xl mb-1">Mensaje</label>
                        <textarea type="text" id='msg' name='msg' value={inputs.msg} 
                        onChange={(e) => handleFieldChange(e)} 
                        className="w-5/6 bg-ska6 text-white max-h-[200px]
                        shadow shadow-ska1 outline-none pl-1 pt-1 h-[10vh] md:h-[20vh]
                        pointer-events-none"/>

                        {errors.msg?
                        <div className="bg-red-700 p-1 font-medium transition-300 mt-2 absolute
                         bottom-[-35px] right-auto md:right-0 text-sm sm:text-base">
                            <p>{errors.msg}</p>
                        </div>:
                        null}
                    </div>
                    
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="w-5/6 flex justify-center">
                            <button className={`text-xl font-medium
                            rounded-full w-4/6 md:w-2/6 py-1 md:py-3 my-3 duration-300 
                            ${btnHover?'scale-110':'scale-100'} ${btnHover?'bg-ska6':'bg-ska1'} 
                            shadow-ska1 ${!loading?'shadow':null}
                            ${!loading?'bg-ska1':'bg-transparent'} flex justify-center
                            pointer-events-none duration-300`}>
                                {!loading?'Enviar':<AiOutlineLoading className="animate-spin"/>}
                            </button>
                        </div>
                    </div>

                </div>
            </form>
            
        </div>
    </div>
    )
}