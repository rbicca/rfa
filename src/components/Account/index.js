import React from 'react'
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext,  withAuthorization } from '../Session';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        { authUser => (
            <div>
                <h1>Account Page</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
    
);

const condition = authUser => !!authUser;

//Exemplo de controle mais granular
//const condGranular = authUser => authUser && authUser.roles[ROLES.ADMIN];


export default withAuthorization(condition)(AccountPage);
 