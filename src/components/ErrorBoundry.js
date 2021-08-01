import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(error, info){
        this.setState({ hasError: true })
    }
    
    render() {
        const {hasError} = this.state
        if (hasError){
            return (
                <div>
                   <h1>Error... please contact the support</h1> 
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundry;