import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";

const Formulario = () => {
    return (
        <> 
        <Container className="mt-5">
            <Card className="" border="dark" >
        <Card.Header > <h2 className="ms-5 p-3">Turnos Veterinaria🐕🐈</h2></Card.Header>
        <Form>

      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre Mascota</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="m-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre Dueño</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" />
      </Form.Group>
<Row>
<Col sm={4}>
      <Form.Group className="m-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" placeholder="name@example.com" />
      </Form.Group>
      </Col>
      <Col sm={4}>
      <Form.Group className="m-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="time" placeholder="name@example.com" />
      </Form.Group>
      </Col>
      </Row>
      <Form.Group className="m-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control as="textarea" rows={3} resize="none" />
      </Form.Group>
      
      <Button className="m-3">Crear cita Nueva</Button>
    </Form>
      </Card>
      </Container>
        </>
    );
};

export default Formulario;