import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {

    return (
        <div className={props.className}>
            <input className="form-check-input" name={props.labelFor} type="checkbox" checked={props.checked} id={props.labelFor} onChange={props.handleChange}/>
            <label className="form-check-label" htmlFor={props.labelFor}>{props.label}</label>         
        </div>
    )
}

CheckBox.propTypes = {
    className: PropTypes.string,
    labelFor: PropTypes.string,
    checked: PropTypes.bool,
    handleChange: PropTypes.func,
    label: PropTypes.string
};

CheckBox.defaultProps = {
    className: 'form-group',
    labelFor: 'checkbox',
    checked: false,
    handleChange: function(){},
    label: 'CheckBox'
}

export default CheckBox