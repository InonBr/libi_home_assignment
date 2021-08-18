import Login from '../components/app/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path='/secure'>
          <h1>secure page</h1>
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route
          render={() => {
            return <Redirect to='/login' />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default Routers;
