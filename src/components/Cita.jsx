import { Card, Button,Form } from "react-bootstrap";

const Cita = ({cita, borrarCita}) => {
    return (
        <div className="mt-5">
            <Card className="CardCita">
      <Card.Header className="d-flex"><div className="border d-flex avatarPerruno"></div> <div><p>Mascota: {cita.nombreMascota} </p> <p>Dueño: {cita.nombreDuenio}</p></div></Card.Header>
      <Card.Body>
      <Form.Group className="m-3" controlId="exampl2">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="text" placeholder={cita.fecha} />         
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleF3">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="text" placeholder={cita.hora} />         
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleF4">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control as="textarea" rows={3} resize="none" placeholder={cita.sintomas} />         
      </Form.Group>
       
      </Card.Body>
      <Button variant="danger"  onClick={()=> borrarCita(cita)}>Borrar Cita</Button>
    </Card>
        </div>
    );
};

export default Cita;