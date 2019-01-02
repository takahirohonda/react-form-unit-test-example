import React from 'react';

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

export default MultiSelect;