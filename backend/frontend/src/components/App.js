import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate  from 'react-alert-template-basic';
import Header from './layout/Header';
import Dashboard from './blogs/Dashboard';
import Alerts from './layout/Alerts';

// Alert Options
const alertOptions = {
    timeout: 3000,
    //position: 'top center'
    position: positions.BOTTOM_CENTER,
    transition: transitions.SCALE
};

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        );
    };
};

ReactDOM.render(<App />, document.getElementById('app'));
