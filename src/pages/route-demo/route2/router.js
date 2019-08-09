import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import About from './../route1/about';
import Topic from './../route1/topic';
export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <Home>
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="/main/a" component={About}></Route>
                        </Main>
                    }>
                    </Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        )
    }
}