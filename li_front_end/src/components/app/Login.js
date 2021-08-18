import Card from 'react-bootstrap/Card';
import LoginForm from './LoginForm';
import '../styles/forms.css';

const Login = () => {
  return (
    <Card className='text-center form-size center-form'>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <LoginForm />
      </Card.Body>
    </Card>
  );
};

export default Login;
