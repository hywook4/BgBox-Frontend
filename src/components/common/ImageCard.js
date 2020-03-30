import React, {Component} from 'react';
import './ImageCard.css';



export class ImageCard extends Component{
    constructor(props){
        super(props);
        
        this.dummy = null;
    }

    

    render(){
        let space = 0;
        let colNum = 0;
        let width = 0;
        let cardMargin = 9;

        if(this.props.parentWidth<=400){
            colNum = 1;
        } else if(this.props.parentWidth>400 && this.props.parentWidth<=800){
            colNum = 2;
        } else if(this.props.parentWidth>800 && this.props.parentWidth<=1200){
            colNum = 3;
        } else if(this.props.parentWidth>1200 && this.props.parentWidth<=1400){
            colNum = 4;
        }
        
        space = cardMargin*2*colNum + colNum;

        width = (this.props.parentWidth-space)/colNum;

        let height = width*2;
        let cardStyle = {
            width: String(width)+"px",
            height: String(height)+"px"
        }




        return(
            <div className="imagecard_body" style={cardStyle}>
                <img src={this.props.imgData.largeImageURL} alt={this.props.imgData.id}/>
            </div>
        )
        
        /*
        return(
            <div className="imagecard_body">
                <img src={require('./images/'+this.props.fileName)} alt="test"/>
            </div>
        )*/

    }
}