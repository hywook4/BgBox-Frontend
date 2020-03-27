import React, {Component} from 'react';
import './Home.css';
import {Loading} from '../common/Loading';
import {ImageCard} from '../common/ImageCard';

export class Home extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            data: [
                "test", "test2", "asd", "df", "asdf", "df"
            ]
        };

    };


    render(){

        return(
            <div id="home_body">
                {
                    this.state.data.length === 0 ? <Loading/> : 
                    this.state.data.map((d, i) => {
                        return <ImageCard/>
                    })
                }
            </div>
        )
    }
}