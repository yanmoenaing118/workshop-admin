import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SongForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: "Done for me",
      singer: "Punch",
      poster: "Some poster",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Singer</Form.Label>
        <Form.Control type="text" placeholder="Enter singer's name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Poster</Form.Label>
        <Form.Control type="text" placeholder="Enter a poster url" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
