import Cita from "./Cita";


const Lista = (props) => {

    const texto = props.citas.length === 0 ? 'No hay Citas' : 'Listado de Citas'
    
    return (
        <>
        <section className="contenedorMensaje d-flex align-items-center justify-content-center ">
        <div className='text-center display-5 mensaje' >{texto}</div>
       
        </section>
         <div className="Master ">
             
         {
         props.citas.map((item, posicion)=> <Cita key={posicion} cita={item} borrarCita={props.borrarCita} citas={props.citas}></Cita>)
         }

         
     </div>
     </>
    );
    
};

export default Lista;