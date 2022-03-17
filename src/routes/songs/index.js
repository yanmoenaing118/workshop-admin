import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import MyModal from "./../../components/Modal";
import SongForm from "./../../components/SongForm";

export default function SongsPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid="md" style={{ padding: "20px" }}>
      <Row p={12}>
        <Col>
          <h2>Songs</h2>
        </Col>
        <Col xl={1}>
          <Button variant="primary" onClick={handleShow}>
            Add
          </Button>
        </Col>
      </Row>
      <SongsList list={[1, 2, 3, 4]} />
      <MyModal
        title="Add New Song"
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      >
        <SongForm />
      </MyModal>
    </Container>
  );
}

function SongsList({ list }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Poster</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item}>
            <td>Done for me</td>
            <td>Punch</td>
            <td>someimage.jpg</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
