/***
 * Install with npm install react-bootstrap bootstrap
 * Import the styled component(s) e.g. Button, Card
 * Import the bootstrap stylesheet into your App.js [import 'bootstrap/dist/css/bootstrap.min.css']
 * Use styled component in your own component
 * 
 */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg';

function BasicCard() {
    const handleClick = () => {
        console.log('Clicked')
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;