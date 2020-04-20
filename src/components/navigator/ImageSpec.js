import React, {Component} from 'react';
import './ImageSpec.css';

import queryString from 'query-string';


export class ImageSpec extends Component{
    constructor(props){
        super(props);
        

        const imageId = props.match.params.id;
        console.log(imageId);
        
        this.state = {
            imageId : imageId,
        }
    }
       
        


    render(){


        return(
            <div>
                asdfsadf
                { this.state.imageId }
            </div>
        )
        
    }
}