import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('[object Object]')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/welcome', state: { from: props.location } }} />
    )} />
)