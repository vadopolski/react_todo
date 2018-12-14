import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GroupFormCheck extends Component {
    static propTypes = {
        formClassName: PropTypes.string,
        inputClassName: PropTypes.string,
        value: PropTypes.string,
        inputType: PropTypes.string,
        labelClassName:  PropTypes.string,
        labelValue: PropTypes.string,
    };

    static defaultProps = {
        formClassName: 'form-group form-check',
        inputClassName: 'form-check-input',
        inputType: 'checkbox',
        labelClassName: 'form-check-label',
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={this.props.formClassName}>
                <input
                    type={this.props.inputType}
                    className={this.props.inputClassName}
                    value={this.props.value} />
                <label className={this.props.className}>{this.props.labelValue}</label>
            </div>
        );
    }
}