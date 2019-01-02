import React from 'react';

const Button = (props) => {
    const Tag = props.href? 'a':'button';
    return <Tag {...props} />
}

export default Button;