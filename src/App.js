import React from 'react';
import { Switch, Route } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/signUp" component={SignUp}></Route>
            <Route path="/" component={SignIn}></Route>
        </Switch>
    </div>
  );
}

export default App;
