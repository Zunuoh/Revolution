import {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginScreen from './pages/Auth/login';
import ForgotpasswordScreen from './pages/Auth/forgotPassword';


function App() {
  return (
  //  <Fragment>
  //    <BrowserRouter>
  //    <Switch>
  //      <Route component={LoginScreen} path="/login" exact={true}/>
  //      <Route component={ForgotpasswordScreen} path="/forgotpassword" exact={true}/>
  //    </Switch>
  //    </BrowserRouter>
  //  </Fragment>
  <LoginScreen/>
  );
}

export default App;
