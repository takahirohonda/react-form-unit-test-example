import React from 'react';

const Options = (props) => {
    var element = props.options.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return element
}

export default Options;