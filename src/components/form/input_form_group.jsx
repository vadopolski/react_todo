import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from "./input";

export default class InputFormGroup extends Component {

    static propTypes = {
        inputName: PropTypes.string,
        className: PropTypes.string,
        htmlFor: PropTypes.string,
        labelName: PropTypes.string,
        ariaDescribedby: PropTypes.string,
        placeholder: PropTypes.string,
        smallClassName: PropTypes.string,
        smallValue: PropTypes.string,
        isCalendarPicture: PropTypes.bool,
    };

    static defaultProps = {
        className: 'form-group',
        ariaDescribedby: 'taskDataHelp',
        smallClassName: 'form-text text-muted',
        isCalendarPicture: true
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let calendarPicture = <h2/>;
        if (this.props.isCalendarPicture) {
            calendarPicture = <div onClick={null} className='input-group-prepend'>
                                  <span
                                      style={{cursor: 'pointer !important'}}
                                      className='input-group-text'
                                      id='calendarOpener'
                                  >
                                      <i className='fa fa-calendar'></i>
                                  </span>
                                </div>;
        }
        return (
            <React.Fragment>
                <div className={this.props.className}>
                    <label>{this.props.labelName}</label>
                    <div className='input-group'>
                        {calendarPicture}
                        <TextInput
                            name={this.props.inputName}
                            ariaDescribedby={this.props.ariaDescribedby}
                            placeholder={this.props.placeholder}
                            value={this.props.inputName || ''}
                            onChange={this.handleChange}
                        />
                    </div>
                    <small className={this.props.smallClassName}>
                        {this.props.smallValue}
                    </small>
                </div>
            </React.Fragment>
        );
    }
}