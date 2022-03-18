import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import MyModal from "./../../components/Modal";
import DramaForm from "./../../components/DramaForm";
import useDramas from "./../../lib/useDramas";

export default function DramasPage() {
  const [show, setShow] = useState(false);
  const { data, loading, postData, deleteData } = useDramas();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (body) => postData(body);
  const deleteOne = (id) => deleteData(id);

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
      {!loading && <DramasList list={data.dramas} onDelete={deleteOne} />}
      <MyModal
        title="Add New Drama"
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      >
        <DramaForm onSubmit={handleSubmit} />
      </MyModal>
    </Container>
  );
}

function DramasList({ list, onDelete }) {
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
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.actor}</td>
            <td>{item.actress}</td>
            <td>
              <Button onClick={() => onDelete(item._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
