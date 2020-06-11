import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../utils';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../containers/HomePage';
import { Login } from '../containers/Login';
import { Registration } from '../containers/Registration';
import TopSection from '../components/LeftSideBar/TopSection'

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="">
        <div className="">
            <div className="col-md-8 offset-md-2">
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
            </div>
       
        <Router history={history}>
            <Switch>
           
                <PrivateRoute exact path="/home" component={TopSection} />
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Redirect from="*" to="/home" />
            </Switch>
        </Router>
            
        </div>
    </div>
    );
}

export { App };