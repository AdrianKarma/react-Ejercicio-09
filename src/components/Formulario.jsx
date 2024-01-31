import { useEffect, useState } from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
import Lista from "./Lista";

const Formulario = () => {
    const citasLocalStorage = JSON.parse(localStorage.getItem('listaCitas')) || []
    const [nombreMascota, SetNombreMascota] = useState ("");
    const [nombreDuenio, SetnombreDuenio] = useState ("");
    const [fecha, SetFecha] = useState ("");
    const [hora, SetHora] = useState ("");
    const [sintomas, SetSintomas] = useState ("");
    const [citas, SetCitas] = useState(citasLocalStorage);
    
useEffect(()=>{
localStorage.setItem('listaCitas', JSON.stringify(citas));
},[citas])


    const handleSubmit = (e)=> {e.preventDefault();
        const cita = {nombreMascota, nombreDuenio, fecha, hora, sintomas};
        SetCitas ([...citas, cita]);
        SetnombreDuenio ("");
        SetNombreMascota("");
        SetFecha("");
        SetHora("");
        SetSintomas("");
    }
    const borrarCita = (nombreCita)=>{
        const copiaCitas =citas.filter((funcionCita)=> funcionCita !== nombreCita );
        SetCitas(copiaCitas);
   

    };
   
    return (
        <> 
        <Container className="mt-5">
            <Card className="" border="dark" >
        <Card.Header > <h2 className="ms-5 p-1">Turnos Veterinaria🐕🐈</h2></Card.Header>

        <Form onSubmit={handleSubmit} className="">

      <Form.Group className="m-3" controlId="nombreMascota">
        <Form.Label>Nombre Mascota</Form.Label>
        <Form.Control className="cuadroForm" type="text" placeholder="Jan" 
        onChange={(e)=> SetNombreMascota(e.target.value)} 
        value={nombreMascota}/>
         
      </Form.Group>

      <Form.Group className="m-3 " controlId="nombreDuenio">
        <Form.Label>Nombre Dueño</Form.Label>
        <Form.Control className="cuadroForm"  type="text" placeholder="Adrian"
         onChange={(e)=> SetnombreDuenio(e.target.value)} 
        value={nombreDuenio}/>
      </Form.Group>
<Row>
<Col sm={4}>
      <Form.Group className="m-3 " controlId="fecha">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date"  onChange={(e)=> SetFecha(e.target.value) } 
        value={fecha}/>
      </Form.Group>
      </Col>
      <Col sm={4}>
      <Form.Group className="m-3 " controlId="hora">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="time"  onChange={(e)=> SetHora(e.target.value)} 
        value={hora}/>
      </Form.Group>
      </Col>
      </Row>
      <Form.Group className="m-3 " controlId="sintomas">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control className="cuadroForm2" as="textarea" rows={3}  placeholder="Escriba los Sintomas de la Mascota"  onChange={(e)=> SetSintomas(e.target.value)} 
        value={sintomas}/>
      </Form.Group>
      
      <Button className="m-3" type="submit">Crear cita Nueva</Button>
    </Form>
      </Card>
      <Lista citas={citas} borrarCita={borrarCita}></Lista>
      </Container>
        </>
    );
};

export default Formulario;