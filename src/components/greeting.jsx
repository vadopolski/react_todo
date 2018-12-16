import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class Greeting extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { items: [] };
    }

    componentDidMount() {
        // fetch(`http://localhost:8080/clients`)
        //     .then(result=>result.json())
        //     .then(items=> console.log(items))
        //     .then(items=>this.setState({items}));
        axios.get(`http://localhost:8080/clients`)
            .then(res => {
                const items = res.data;
                this.setState({ items })
            .then(items=> console.log(items));
            })
    }

    render() {
        return (<p>Hello world {this.state.items.length}</p>);
    }
}
