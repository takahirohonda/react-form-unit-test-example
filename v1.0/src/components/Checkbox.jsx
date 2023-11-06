import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({
  className, labelFor, checked, handleChange, label,
}) => (
  <div className={className}>
    <input
      className="form-check-input"
      name={labelFor}
      type="checkbox"
      checked={checked}
      id={labelFor}
      onChange={handleChange}
    />
    <label
      className="form-check-label"
      htmlFor={labelFor}
    >
      {label}
    </label>
  </div>
)

CheckBox.propTypes = {
  className: PropTypes.string,
  labelFor: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
  label: PropTypes.string,
}

CheckBox.defaultProps = {
  className: 'form-group',
  labelFor: 'checkbox',
  checked: false,
  handleChange() {},
  label: 'CheckBox',
}

export default CheckBox
