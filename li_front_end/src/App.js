import Button from 'react-bootstrap/Button';
import Routers from './router/Routers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routers />
      <Button variant='primary'>Primary</Button>
      <h1>test me</h1>
    </div>
  );
}

export default App;
