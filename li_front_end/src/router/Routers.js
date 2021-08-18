import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Login from '../components/app/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Routers = () => {
  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();

    if (cookies.get('userToken')) {
      setLogedIn(true);
    } else {
      setLogedIn(false);
    }
  }, []);

  return (
    <Router>
      <Switch>
        {logedIn && (
          <Route exact path='/secure'>
            <h1>secure page</h1>
          </Route>
        )}

        {!logedIn && <Route exact path='/login' component={Login} />}

        <Route
          render={() => {
            return logedIn ? (
              <Redirect to='/secure' />
            ) : (
              <Redirect to='/login' />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default Routers;
