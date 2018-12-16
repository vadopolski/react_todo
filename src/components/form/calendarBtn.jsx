import React from "react";
import PropTypes from 'prop-types';


const CalendarBtn = (props) => {

    return (
        <div onClick={props.onclick} className='input-group-prepend'>
                                  <span
                                      style={{cursor: 'pointer !important'}}
                                      className='input-group-text'
                                      id='calendarOpener'
                                  >
                                      <i className='fa fa-calendar'></i>
                                  </span>
        </div>
    );
};

export default CalendarBtn;

CalendarBtn.propTypes = {
    onclick: PropTypes.func,
};
