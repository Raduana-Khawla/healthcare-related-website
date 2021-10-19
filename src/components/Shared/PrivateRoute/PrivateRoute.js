import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const PrivetRoute = ({ children, ...rest}) => {
    const {user, isLoading} = useAuth() ;
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
 
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRoute;