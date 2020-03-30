import React, {Component} from 'react';

import './Home.css';
import {Loading} from '../common/Loading';
import {ImageCard} from '../common/ImageCard';

import axios from 'axios';


export class Home extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            data: [],
            parentWidth: 0
        };
        
        this.ref = React.createRef();
        this.element = null;
        this.url = "https://pixabay.com/api/?key=15805202-3de7f350b761b390c0c2ee300&q=background+image&image_type=photo"
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    

    updateDimensions(){
        this.setState({
            parentWidth: this.element.clientWidth
        })
    }

    componentDidMount = async () => {
        this.element = this.ref.current;
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);

        let res = await axios.get(this.url);
        this.setState({
            data :res.data.hits
        })

        
    }
    
    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }

   
    render(){

        return(
            
            <div id="home_body">
                <div className="imagecard_container" ref={this.ref}>
                    {
                        this.state.data.length === 0 ? <Loading/> : 
                        this.state.data.map((d, i) => {
                            return <ImageCard key={d.id} imgData={d} parentWidth={this.state.parentWidth}/>
                        })
                    }
                </div>
            </div>
        )
    }
}