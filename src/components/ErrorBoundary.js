import React,  { Component } from 'react';

class ErrorBoundary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1> Ooooooops. That is not good</h1>
        }
        return this.props.children
    }

}

export default ErrorBoundary;

//Achtung: Code beim Anschauen des Tutorials abgeschrieben. 
//Möglicherweise gibt es hier noch Fehler, ich habe es nicht ausprobiert
