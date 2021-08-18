import Routers from './router/Routers';
import Cookies from 'universal-cookie';
import './App.css';

function App() {
  const cookies = new Cookies();

  return (
    <div className='App'>
      <Routers user={cookies.get('userToken')} />
    </div>
  );
}

export default App;
