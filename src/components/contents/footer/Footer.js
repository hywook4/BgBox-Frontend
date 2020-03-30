import React, {Component} from 'react';
import './Footer.css';


export class Footer extends Component{
    

    render(){
        return(
            <div id="footer_body">
                <div id="footer_logo">
                    <img alt="bg_logo" src={require('../../../assets/logo/logo_full_black.png')}/>
                </div>
                <div id="footer_content">
                    여기에 footer 내용이 들어갈 곳임.
                </div>
                <div id="footer_sns">
                    sns icon들어갈곳
                </div>
            </div>
        )
    }
}