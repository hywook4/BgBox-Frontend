import React, {Component} from 'react';
import './SearchBar.css';


export class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state={
            search: "",
        }

        this.onChange = this.onChange.bind(this);
        this.onEnter = this.onEnter.bind(this);
    }

    onChange = (e) => {
        let searchText = e.target.value.trimLeft();

        this.setState({
            search : searchText
        })
    }

    onEnter = (e) => {
        if(e.key === 'Enter'){
            this.onSearch();
        }
    }

    onSearch = (e) => {
        console.log(this.state.search);
    }

    
    render(){
        return(
            <div className="searchbar_container">
                <div className="searchbar_text">
                    <input type="text" placeholder="Search" onChange={this.onChange} onKeyPress={this.onEnter}></input>
                </div>
                <div className="searchbar_submit">
                    <button type="submit" action="" onClick={this.onSearch}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        )
    }
}