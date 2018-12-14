import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewButton extends Component {
    static propTypes = {
        value: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        className: PropTypes.string,
        onclick: PropTypes.func,
    };

    static defaultProps = {
        className: 'btn btn-primary',
        type: 'button',
    };

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <React.Fragment>
                <button
                    type= {this.props.type}
                    className= {this.props.className}
                    onClick={this.props.onclick}> {this.props.value}
                </button>
            </React.Fragment>
        );
    }
}