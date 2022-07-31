import React from 'react'
import PropTypes from 'prop-types'

const Options = ({ options }) => {
  const element = options.map((item) => <option key={item} value={item}>{item}</option>)
  return element
}

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
}

Options.defaultProps = {
  options: [],
}

export default Options
