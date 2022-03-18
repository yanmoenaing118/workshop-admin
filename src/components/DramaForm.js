import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function DramaForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    actress: "",
    actor: "",
  });

  const handleChange = (key) => (event) => {
    setFormData({ ...formData, [key]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          onChange={handleChange("title")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Actress</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter actress's name"
          onChange={handleChange("actress")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Actor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter actor's name"
          onChange={handleChange("actor")}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
