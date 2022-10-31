import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import style from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <>
      <div className={style.container}>
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <p className={style.forgot_password}>
            <Link>Forgot Password ?</Link>
          </p>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p className={style.signup}>
            Not a member? <Link to="/register">Signup now</Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
