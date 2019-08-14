import React from 'react';
import App from './App';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notification from './pages/ui/notification';
import NoMatch from './pages/noMatch';

export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons} />
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route path="/admin/ui/loadings" component={Loadings} />
                                    <Route path="/admin/ui/notification" component={Notification} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </Router>
        )
    }
}