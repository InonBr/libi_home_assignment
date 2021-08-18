import Card from 'react-bootstrap/Card';
import AddMovieForm from './AddMovieForm';
import '../styles/forms.css';

const AddMovieCard = () => {
  return (
    <Card className='text-center form-size center-form'>
      <Card.Header>Add Movie</Card.Header>
      <Card.Body>
        <AddMovieForm />
      </Card.Body>
    </Card>
  );
};

export default AddMovieCard;
