import React, {Component} from 'react';
import './Home.css';
import {Loading} from '../common/Loading';
import {ImageCard} from '../common/ImageCard';

export class Home extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            data: [
                "1.jpg",
                "2.jpg",
                "3.jpg",
                "4.jpg",
                "5.jpg",
                "6.jpg",
                "7.jpg"
            ],
            windowWidth: 0
        };
        
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    updateDimensions(){
        console.log("called");
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    componentDidMount(){
        console.log("mount");
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    
    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }

   

    render(){

        return(
            <div id="home_body">
                {
                    this.state.data.length === 0 ? <Loading/> : 
                    this.state.data.map((d, i) => {
                        return <ImageCard fileName={d} parentWidth={this.state.windowWidth}/>
                    })
                }
            </div>
        )
    }
}