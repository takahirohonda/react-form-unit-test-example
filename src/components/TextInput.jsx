import React from 'react';

const TextInput = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.labelFor}>{props.label}</label>
            <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.handleChange} className={props.className} />      
        </div>
    )
}

export default TextInput;