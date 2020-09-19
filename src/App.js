import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import firebase from './components/Firebase';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            hidden: "hidden"
        }

        this.show = this.show.bind(this);
    }

    show() {
        this.setState({
            hidden: ""
        });
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
            }
            else {
                this.setState({user: false});
            }
        })
        // setTimeout(() => this.show(), 1000);
    }

    render(){
        if(this.state.user === null) {
            return(<div></div>);
        }

        return (
            <div className="App">
                {this.state.user ?
                    <Switch>
                        <Route path="/" render={() => <Dashboard userEmail={this.state.user.email} />}></Route>
                    </Switch>
                    :
                    <Switch>
                        <Route path="/signUp" component={SignUp}></Route>
                        <Route path="/" component={SignIn}></Route>
                    </Switch>
                }
            </div>
        );
    }
}
