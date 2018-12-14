import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component{
    static propTypes = {
        value : PropTypes.string,
        name : PropTypes.string,
        type : PropTypes.string,
        className : PropTypes.string,
        placeholder : PropTypes.string,
        ariaDescribedby : PropTypes.string,
        onChange : PropTypes.func,
    };

    static defaultProps = {
        className: 'form-control',
        type: 'text',
    };

    constructor(props, context) {
        super(props, context);
    }


    render(){
        return(
            <React.Fragment>
                <input
                    type='text'
                    className= {this.props.className}
                    id={this.props.name}
                    name={this.props.name}
                    aria-describedby={this.props.ariaDescribedby}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                />
            </React.Fragment>
        )
    }



}