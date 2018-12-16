import React from "react";
import PropTypes from 'prop-types';

export const UrgentInput = (props) => {
    const {
      name,
      label,
      checked,
      onChange,
    } = props;

    return (
        <div className='form-group form-check'>
            <input
                name={ name }
                id = { name }
                type='checkbox'
                className='form-check-input'
                checked={ checked }
                onChange={ onChange }
            />
            <label className='form-check-label' htmlFor={ name }>
                { label }
            </label>
        </div>
    );
};

export default React.memo(UrgentInput);

UrgentInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

