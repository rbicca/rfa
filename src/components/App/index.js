import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import * as ROUTES from '../constants/routes';

import SignUpPage from '../SignUp';
import HomePage from '../Home';
import SignInPage from '../SignIn';

import { withFirebase } from '../Firebase';

/*
import LandingPage from '../Landing';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import AdminPage from '../Admin';
*/

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          authUser: null,
        };
    }

    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        });
      }
    

    componentWillUnmount() {
        this.listener();
    }

    render(){
        return(
                <Router>
                    <div>
                        <Navigation authUser={this.state.authUser}/>
                        <hr />

                        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route path={ROUTES.HOME} component={HomePage} />
                        
                        {/*
                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                        <Route path={ROUTES.ADMIN} component={AdminPage} />
                        */
                        }
                    </div>
                </Router>
        );
    }

}

export default withFirebase(App);