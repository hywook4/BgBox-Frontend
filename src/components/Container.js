import React, {Component} from 'react';
import './Container.css';

import {Header} from './contents/header/Header';
import {Footer} from './contents/footer/Footer';
import {Home} from './navigator/Home';
import {ImageSpec} from './navigator/ImageSpec';

import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';


export class Container extends Component{


    render(){
        return(
            <div id="main_body">
                <Header/>
                <div>
                    <Router history={createBrowserHistory()}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/images/:id" component={ImageSpec}/>
                        </Switch>
                    </Router>   
                </div>
                <Footer/>
            </div>
        )
    }
}