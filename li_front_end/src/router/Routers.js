import Login from '../components/app/Login';
import SourcePage from '../components/app/SourcePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Routers = (props) => {
  return (
    <Router>
      <Switch>
        {props.user && <Route exact path='/secure' component={SourcePage} />}

        {props.user && (
          <Route exact path='/secure/add_movie' component={SourcePage} />
        )}

        {props.user && (
          <Route exact path='/secure/:category'>
            <h1>category!!!!</h1>
          </Route>
        )}

        {!props.user && <Route path='/login' component={Login} />}

        <Route
          render={() => {
            return props.user ? (
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
