import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function DramaForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: "Test",
      actress: "Park Eun Bin",
      actor: "Someone",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Actress</Form.Label>
        <Form.Control type="text" placeholder="Enter actress's name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Actor</Form.Label>
        <Form.Control type="text" placeholder="Enter actor's name" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
