import React from 'react';
import Users from './components/users/Users';
import Navbar from './components/partials/Navbar';
import UserItem from './components/users/UserItem';

import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';



import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
      <div className="container">
     <switch>

       <Route exact path="/users/" component={Users}/>
       <Route exact path="/users/:login" component={UserItem}/>
       <Route exact  component={Users}/>

     </switch>
      </div>
    
    </div>
    </Router>
  );
}

export default App;
