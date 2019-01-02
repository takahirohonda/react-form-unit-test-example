import React from 'react';

const Jumbotron = (props) => {
    return (
        <div className='jumbotron'>
            {props.children}
        </div>
    )
    
}

export default Jumbotron;