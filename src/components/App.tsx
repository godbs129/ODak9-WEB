import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Mainpage } from '../pages/index';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/" component={Mainpage}></Route>
    </Switch>
  );
}

export default App;
