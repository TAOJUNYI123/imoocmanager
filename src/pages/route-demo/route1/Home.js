import React from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import Main from './Main';
import About from './about';
import Topic from './topic';
export default class Home extends React.Component{
    render(){
        return(
            <HashRouter>
                {/* 里面只能有一个子节点 */}
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    {/* 
                        注意：Route里的component是小写
                        exact是精准的匹配某一个路由
                        <Switch>一旦匹配到了第一个路由，它就不再往下匹配了
                    */}
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}