import React from 'react';
import App from './App';
import {HashRouter as Router,Route} from 'react-router-dom';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/noMatch';

export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons} />
                            <Route component={NoMatch} />
                        </Admin>
                    } />
                </App>
            </Router>
        )
    }
}