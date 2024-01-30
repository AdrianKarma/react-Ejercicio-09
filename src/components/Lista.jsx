import Cita from "./Cita";


const Lista = (props) => {
    return (
        <div className="Master ">
            {
            props.citas.map((cita, posicion)=> <Cita key={posicion} cita={cita} ></Cita>)
            }
        </div>
    );
};

export default Lista;