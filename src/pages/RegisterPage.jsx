import RegisterForm from '../components/RegisterForm/RegisterForm';
import Container from '../UI/Container/Container';
import Hr from '../UI/Hr/Hr';

const RegisterPage = () => {
  return (
    <>
      <Container>
        <h1 className="text-center">RegisterPage</h1>
        <Hr />
        <RegisterForm />
      </Container>
    </>
  );
};

export default RegisterPage;
