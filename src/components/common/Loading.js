import React, {Component} from 'react';
import './Loading.css';



export class Loading extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div class="loading_body">
                <div class="loading_icon_box">
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                <div class="loading_message_box">
                    <p>Loading Images!</p>
                    <p>Thank you for your patience</p>
                </div>
            </div>
        )
    }
}