import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const SuperRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('[object Object].admin')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/profile', state: { from: props.location } }} />
    )} />
)