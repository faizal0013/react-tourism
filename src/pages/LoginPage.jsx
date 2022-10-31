import LoginForm from '../components/LoginForm/LoginForm';
import Container from '../UI/Container/Container';
import Hr from '../UI/Hr/Hr';

const LoginPage = () => {
  return (
    <>
      <Container>
        <h1 className="text-center">Login</h1>
        <Hr />
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginPage;
