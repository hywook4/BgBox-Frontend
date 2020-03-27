import React, {Component} from 'react';
import './ImageCard.css';



export class ImageCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let width = (this.props.parentWidth - 80)/3;
        let height = width*2;
        let cardStyle = {
            width: String(width)+"px",
            height: String(height)+"px"
        }

        return(
            <div className="imagecard_body" style={cardStyle}>
                <img src={require('./images/'+this.props.fileName)} alt="test"/>
            </div>
        )
    }
}