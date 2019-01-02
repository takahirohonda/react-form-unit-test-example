import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.labelFor}>{props.label}</label>
            <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.handleChange} className={props.className} />      
        </div>
    )
}

TextInput.propTypes = {
    label: PropTypes.string,
    labelFor: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};

TextInput.defaultProps = {
    label: 'Text Input',
    labelFor: 'text input',
    value: 'Hello Text Input',
    handleChange: function(){},
    id: 'input',
    name: 'input',
    type: 'input',
    className: 'form-control'
}

export default TextInput;