import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Mainpage } from '../pages/index';
import Register from './Register/Register';
import { Toaster } from 'react-hot-toast';

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Mainpage}></Route>
        <Route path="/register" component={Register} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
