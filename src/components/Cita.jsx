import { Card, Button,Form } from "react-bootstrap";

const Cita = (props) => {
    return (
        <div className="mt-5">
            <Card className="CardCita">
      <Card.Header className="d-flex"><div className="border d-flex avatarPerruno"></div> <div><p>Mascota: {props.cita.nombreMascota} </p> <p>Dueño: {props.cita.nombreDuenio}</p></div></Card.Header>
      <Card.Body>
      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="text" placeholder={props.cita.fecha} />         
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="text" placeholder={props.cita.hora} />         
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control as="textarea" rows={3} resize="none" placeholder={props.cita.sintomas} />         
      </Form.Group>
       
      </Card.Body>
      <Button variant="danger">Borrar Cita</Button>
    </Card>
        </div>
    );
};

export default Cita;