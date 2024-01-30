import Cita from "./Cita";


const Lista = (props) => {
    return (
        <div>
            {
            props.citas.map((elementoCita, posicionCita)=> <Cita key={posicionCita} nombreCita={elementoCita} ></Cita>)
            }
        </div>
    );
};

export default Lista;