import { useState } from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
import Lista from "./Lista";

const Formulario = () => {
    
    const [nombreMascota, SetNombreMascota] = useState ("");
    const [nombreDuenio, SetnombreDuenio] = useState ("");
    const [fecha, SetFecha] = useState ("");
    const [hora, SetHora] = useState ("");
    const [sintomas, SetSintomas] = useState ("");
    const [citas, SetCitas] = useState([]);
    
    const handleSubmit = (e)=> {e.preventDefault();
        const cita = {nombreMascota, nombreDuenio, fecha, hora, sintomas};
        SetCitas ([...citas, cita]);
        //SetnombreDuenio ("");
        //SetNombreMascota("");
        //SetFecha("");
        //SetHora("");
        //SetSintomas("");
    };
   
    return (
        <> 
        <Container className="mt-5">
            <Card className="" border="dark" >
        <Card.Header > <h2 className="ms-5 p-3">Turnos Veterinaria🐕🐈</h2></Card.Header>

        <Form onSubmit={handleSubmit}>

      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre Mascota</Form.Label>
        <Form.Control type="text" placeholder="Jan" 
        required onChange={(e)=> SetNombreMascota(e.target.value)} 
        value={nombreMascota}/>
         
      </Form.Group>

      <Form.Group className="m-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre Dueño</Form.Label>
        <Form.Control type="text" placeholder="Adrian"
        required onChange={(e)=> SetnombreDuenio(e.target.value)} 
        value={nombreDuenio}/>
      </Form.Group>
<Row>
<Col sm={4}>
      <Form.Group className="m-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" required onChange={(e)=> SetFecha(e.target.value) } 
        value={fecha}/>
      </Form.Group>
      </Col>
      <Col sm={4}>
      <Form.Group className="m-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="time" required onChange={(e)=> SetHora(e.target.value)} 
        value={hora}/>
      </Form.Group>
      </Col>
      </Row>
      <Form.Group className="m-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control as="textarea" rows={3} resize="none" placeholder="Escriba los Sintomas de la Mascota" required onChange={(e)=> SetSintomas(e.target.value)} 
        value={sintomas}/>
      </Form.Group>
      
      <Button className="m-3" type="submit">Crear cita Nueva</Button>
    </Form>
      </Card>
      <Lista citas={citas} ></Lista>
      </Container>
        </>
    );
};

export default Formulario;