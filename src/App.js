import Navigation from './navbar/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListEmployees from './pages/ListEmployees';
import AddEmployees from './pages/AddEmployees';
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ListEmployees} />
          <Route exact path="/addEmp" component={AddEmployees} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
