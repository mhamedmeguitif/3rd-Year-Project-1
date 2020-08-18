import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('[object Object]')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/profile', state: { from: props.location } }} />
    )} />
)