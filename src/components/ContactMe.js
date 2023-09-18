import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap";
import Form from 'react-bootstrap/Form';
const ContactMe = () => {
    return ( 
    <div>
        <Container fluid className="contact-section">


        <p >
   I'm always interested in hearing about new projects, 
    so if you'd like to chat please get in touch.
   </p>
   <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

        </Container>
  
    </div> );
}
 
export default ContactMe;