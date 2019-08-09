import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import About from './../route1/about';
import Topic from './../route1/topic';
import Info from './Info';
import NoMatch from './NoMatch';
export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={()=>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }>
                        </Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route exact path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}