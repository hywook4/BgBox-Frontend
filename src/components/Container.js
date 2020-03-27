import React, {Component} from 'react';
import './Container.css';

import {Header} from './contents/header/Header';
import {Footer} from './contents/footer/Footer';
import {Home} from './navigator/Home';


export class Container extends Component{



    render(){
        return(
            <div id="main_body">
                <Header/>

                <Home/>
                
            
                <Footer/>
            </div>
        )
    }
}