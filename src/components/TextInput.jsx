import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({
  labelFor, label, type, name, id, value, handleChange, className,
}) => (
  <div className="form-group">
    <label htmlFor={labelFor}>{label}</label>
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
      className={className}
    />
  </div>
)

TextInput.propTypes = {
  label: PropTypes.string,
  labelFor: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
}

TextInput.defaultProps = {
  label: 'Text Input',
  labelFor: 'text input',
  value: 'Hello Text Input',
  handleChange() {},
  id: 'input',
  name: 'input',
  type: 'input',
  className: 'form-control',
}

export default TextInput
