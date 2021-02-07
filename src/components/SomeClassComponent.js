import React, {Component} from 'react';

class SomeClassComponent extends Component{
    render (){
        return (
            <div>
                <h1>This is our first class component.</h1>
                <h1>{this.props.myText}</h1>
                {this.props.children}
                
            </div>
        )
    }
}

export default SomeClassComponent;