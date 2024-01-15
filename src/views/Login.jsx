import { useState } from "react";
import useAxios from "../hooks/useAxios";


// Pagina de log de web 
const LoginPage = () => {
    // componente de login del website
    //  Estado del correo
    // Validacion del correo
   const[correo,SetCorreo] = useState('') //  set correo es el valor 
   const [validMail,SetValidMail] = useState(false) //  estado incicial de mail invalido
   const [Enviado,SetEnviado] = useState(false);


   const OnMail = (event)=>{ //  funcion de cambio de valores y validacion
    let newMail =  event.target.value;
    SetCorreo(newMail) // asignacion del correo para manejo de estado
    let regexmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    let valido =  regexmail.test(correo) //  valor del correo
    SetValidMail(valido)
   }

   const OnSubmit = (event)=>{
    event.preventDefault()
    SetEnviado(true) // estado del envio por consola
   }

// uso de api

 const{response,loading, error}= useAxios({ // response , loading , error values that return teh hook 
    method:'POST',
    url:'http://localhost:8080/api/login',
    headers:{accept:'*/*'},
    data:{
        mail:"net2704@panastorepty.com",
        password:"RORUS300"
    },
 })

 console.log(response,loading,error);
    return (

            <form className='bg-slate-950 flex flex-col items-center m-2' onSubmit={OnSubmit} >
                <h1 className='text-white'>NETFLIX CHECKER</h1>
                <div className='flex flex-col items-center'>   
                    <div className='m-2'>
                        <p className='text-white'>Ingrese un correo</p>
                        <input type="mail" value={correo} onChange={OnMail} id="mail" className='outline-none rounded-sm'/>
                    </div>
                    {Enviado&&!validMail&&(<p className='text-red-600'>Ingrese un correo Valido</p>)} 
                    <div className='m-2'>  {/** elemento de clave */}
                        <p className='text-white'>Contraseña</p>
                        <input type="password" id="password" className='outline-none rounded-sm'/>
                    </div>
                    <div>
                        <button type="submit" className='text-white m-2 rounded bg-red-700 px-2'>Enviar</button>
                    </div>
                </div>
            </form>
        
    );
}
export {LoginPage} //  exportacion