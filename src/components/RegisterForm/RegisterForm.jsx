import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import style from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <>
      <div className={style.container}>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirm-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="confirm password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className={style.login}>
            already have an account ? <Link to="/login">login now</Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default RegisterForm;
