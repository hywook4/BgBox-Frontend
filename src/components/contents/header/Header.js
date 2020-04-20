import React, {Component} from 'react';
import './Header.css';

import {SearchBar} from '../../common/SearchBar';


export class Header extends Component{
   

    

    render(){
        return(
            <div id="header_body">
                <div id="header_inner_top">
                    <div id="header_logo_box">
                        <a href="/">
                            <img id="header_logo_img" src={require("../../../assets/logo/logo_text_white.png")} alt="logo"/>
                        </a>
                    </div>
                    <div id="header_nav_box">
                        <a href='/'>홈</a>
                        <a href='/'>소개</a>
                        <a href='/'>카테고리</a>
                        <a href='/'>검색</a>
                    </div>
                    <div id="header_login_btn">
                        로그인
                    </div>
                </div>
                
                <div id="header_inner_body">
                    <div id="header_inner_body_logo">
                        <img src={require("../../../assets/logo/logo_full_white.png")} alt="bg_logo"></img>
                    </div>
                    <SearchBar/>
                    <div id="header_inner_body_subtitle">
                        <h4>카테고리, 테마, 제목으로 다양한 이미지를 검색해보세요!</h4>
                    </div>
                    
                </div>
            </div>
        )
    }
}