import Cita from "./Cita";


const Lista = (props) => {
    return (
        <div className="Master ">
            {
            props.citas.map((item, posicion)=> <Cita key={posicion} cita={item} borrarCita={props.borrarCita}></Cita>)
            }
        </div>
    );
};

export default Lista;