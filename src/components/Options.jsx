import React from 'react';
import PropTypes from 'prop-types';

const Options = (props) => {
    var element = props.options.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return element
}

Options.propTypes = {
    options: PropTypes.array
};

Options.defaultProps = {
    options: []
};

export default Options;