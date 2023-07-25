import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/4297506/pexels-photo-4297506.jpeg?cs=srgb&dl=pexels-prithivirajan-c-4297506.jpg&fm=jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
