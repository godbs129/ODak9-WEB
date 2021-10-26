import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Mainpage } from '../pages/index';
import Register from './Register/Register';
import { Toaster } from 'react-hot-toast';

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Mainpage}></Route>
        <Route exact path="/register" component={Register} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
