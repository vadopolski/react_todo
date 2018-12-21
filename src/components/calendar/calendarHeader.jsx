import React from "react";
import PropTypes from 'prop-types';


const CalendarHeader = (props) => {

    const monthNames = [ "January","February","March","April","May","June","July","August","September","October","November","December" ];

    return (   <div className='header'>
            <p>{monthNames[props.month] + ' ' + props.year}</p>
        </div>
    );
};

export default CalendarHeader;

CalendarHeader.propTypes = {
    year: PropTypes.number,
    month: PropTypes.number,
};
