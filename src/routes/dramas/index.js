import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import MyModal from "./../../components/Modal";
import DramaForm from "./../../components/DramaForm";

export default function DramasPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid="md" style={{ padding: "20px" }}>
      <Row p={12}>
        <Col>
          <h2>Dramas</h2>
        </Col>
        <Col xl={1}>
          <Button variant="primary" onClick={handleShow}>
            Add
          </Button>
        </Col>
      </Row>
      <DramasList list={[1, 2, 3, 4]} />
      <MyModal
        title="Add New Drama"
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      >
        <DramaForm />
      </MyModal>
    </Container>
  );
}

function DramasList({ list }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Actor</th>
          <th>Actress</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item}>
            <td>The King's effection</td>
            <td>Someone</td>
            <td>Park Eun Bin</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
