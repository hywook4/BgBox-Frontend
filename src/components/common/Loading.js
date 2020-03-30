import React, {Component} from 'react';
import './Loading.css';



export class Loading extends Component{

    render(){
        return(
            <div className="loading_body">
                <div className="loading_icon_box">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                <div className="loading_message_box">
                    <p>Loading Images!</p>
                    <p>Thank you for your patience</p>
                </div>
            </div>
        )
    }
}