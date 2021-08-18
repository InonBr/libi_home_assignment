import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { addMovieApi } from '../../lib/api';
import Cookies from 'universal-cookie';
import '../styles/forms.css';

const AddMovieForm = () => {
  const cookies = new Cookies();
  const [showErr, setShowErr] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowErr(false);
    setShowSuccess(false);

    addMovieApi(data, cookies.get('userToken'))
      .then((response) => {
        setSuccessMsg(response.data.msg);
        setShowSuccess(true);
      })
      .catch((error) => {
        if (error.response.data.message.includes('duplicate')) {
          setErrMsg('Movie already uploaded');
          setShowErr(true);
        }
      });
  };

  const errMessageToShow = () => {
    return (
      <Form.Group>
        <Form.Label className='red-text center-text' column='lg'>
          {errMsg}
        </Form.Label>
      </Form.Group>
    );
  };

  const successMsgToShow = () => {
    return (
      <Form.Group>
        <Form.Label className='green-text center-text' column='lg'>
          {successMsg}
        </Form.Label>
      </Form.Group>
    );
  };

  return (
    <Form className='m-5' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor='name'>Movie Name</Form.Label>
        <Form.Control
          id='name'
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', {
            required: 'You must provide a Movie Name',
            maxLength: {
              value: 30,
              message: 'Movie Name length must be up to 30 characters',
            },
          })}
          type='text'
          placeholder='Movie Name'
        />

        {errors.name && (
          <Form.Text className='red-text' role='alert'>
            {errors.name.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='category'>Movie Category</Form.Label>

        <Form.Select
          id='category'
          name='category'
          type='category'
          {...register('category')}
        >
          <option value='action'>Action</option>
          <option value='comedy'>Comedy</option>
          <option value='drama'>Drama</option>
          <option value='other'>Other</option>
        </Form.Select>

        {errors.category && (
          <Form.Text className='red-text' role='alert'>
            {errors.category.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='imdb'>IMDB link</Form.Label>
        <Form.Control
          id='imdb'
          aria-invalid={errors.imdb ? 'true' : 'false'}
          {...register('imdb', {
            required: 'You must provide a IMDB link',
            validate: (value) =>
              value.includes('imdb') || 'Valid IMDB url is required',
          })}
          type='url'
          placeholder='IMDB link'
        />

        {errors.imdb && (
          <Form.Text className='red-text' role='alert'>
            {errors.imdb.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>{showErr && errMessageToShow()}</Form.Group>
      <Form.Group>{showSuccess && successMsgToShow()}</Form.Group>

      <Button variant='primary' type='submit' className='mt-3'>
        Login
      </Button>
    </Form>
  );
};

export default AddMovieForm;
