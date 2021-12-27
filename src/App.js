// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Contact from './Contact';
import BlogDetail from './BlogDetail'
import NotFound from './Notfound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/Create'>
              <Create></Create>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/blogging/:id'>
              <BlogDetail></BlogDetail>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div >
    </Router>
  );
}


export default App;
