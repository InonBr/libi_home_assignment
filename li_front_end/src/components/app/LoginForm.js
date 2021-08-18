import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import '../styles/forms.css';

const LoginForm = () => {
  const [invalidCredentialsErr, setInvalidCredentialsErr] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setInvalidCredentialsErr(false);

    console.log(data);
  };

  const errMessageToShow = () => {
    return (
      <Form.Group>
        <Form.Label className='red-text center-text' column='lg'>
          Invalid credentials!
        </Form.Label>
      </Form.Group>
    );
  };

  return (
    <Form className='m-5' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor='userName'>Username</Form.Label>
        <Form.Control
          id='userName'
          aria-invalid={errors.userName ? 'true' : 'false'}
          {...register('userName', { required: true })}
          type='text'
          placeholder='Username'
        />

        {errors.userName && errors.userName.type === 'required' && (
          <Form.Text className='red-text' role='alert'>
            Username is required
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>

        <Form.Control
          id='password'
          name='password'
          type='password'
          {...register('password', {
            required: 'password is required',
          })}
          placeholder='password'
        />

        {errors.password && (
          <Form.Text className='red-text' role='alert'>
            {errors.password.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>{invalidCredentialsErr && errMessageToShow()}</Form.Group>

      <Button variant='primary' type='submit' className='mt-3'>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
