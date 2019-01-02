import React from 'react';
import PropTypes from 'prop-types';

const MultiSelect = (props) => {
    return (
        <div>
            <label htmlFor={props.labelFor}>{props.label}</label>
            <select multiple className={props.className} value={props.value} id={props.labelFor} name={props.labelFor} onChange={props.handleChange}>
                {props.children}
            </select>
        </div>
    )
}

MultiSelect.propTypes = {
    className: PropTypes.string,
    labelFor: PropTypes.string,
    value: PropTypes.array,
    handleChange: PropTypes.func,
    label: PropTypes.string
};

MultiSelect.defaultProps = {
    className: 'form-group',
    labelFor: 'checkbox',
    value: [],
    handleChange: function(){},
    label: 'MultiSelect'
}

export default MultiSelect;