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
            parentWidth: 0
        };
        
        this.ref = React.createRef();
        this.element = null;
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    

    updateDimensions(){
        this.setState({
            parentWidth: this.element.clientWidth
        })
    }

    componentDidMount(){
        this.element = this.ref.current;
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    
    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }

   

    render(){

        return(
            
            <div id="home_body">
                <div class="imagecard_container" ref={this.ref}>
                    {
                        this.state.data.length === 0 ? <Loading/> : 
                        this.state.data.map((d, i) => {
                            return <ImageCard fileName={d} parentWidth={this.state.parentWidth}/>
                        })
                    }
                </div>
            </div>
        )
    }
}