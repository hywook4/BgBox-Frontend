import React, {Component} from 'react';
import './ImageCard.css';



export class ImageCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const space = 50;
        let colNum = 0;
        let width = 0;

        if(this.props.parentWidth<=400){
            colNum = 1;

        } else if(this.props.parentWidth>400 && this.props.parentWidth<=800){
            colNum = 2;
        } else if(this.props.parentWidth>800 && this.props.parentWidth<=1200){
            colNum = 3;
        } else if(this.props.parentWidth>1200 && this.props.parentWidth<=1600){
            colNum = 4;
        } else if(this.props.parentWidth>1600 && this.props.parentWidth<=2000){
            colNum = 5;
        } else{
            colNum = 6;
        }

        width = (this.props.parentWidth-space*colNum)/colNum;

        //let width = (this.props.parentWidth - 77)/3;
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