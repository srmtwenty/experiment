import React, {Component} from 'react';

class Header extends React.Component{
    render(){
        const {firstName, lastName} = this.props;
        return(
            <div>
                <h1>My name is {this.props.firstName} {this.props.lastName}</h1>
            </div>
        );
    }
}

export default Header;