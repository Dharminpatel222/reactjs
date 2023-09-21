import React, { Component } from 'react';

class Classprops extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Classprops;
