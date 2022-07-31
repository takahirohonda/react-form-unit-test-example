import React from 'react'
import PropTypes from 'prop-types'

const MultiSelect = ({
  labelFor,
  label,
  className,
  value,
  handleChange,
  children,
}) => (
  <div>
    <label htmlFor={labelFor}>{label}</label>
    <select
      multiple
      className={className}
      value={value}
      id={labelFor}
      name={labelFor}
      onChange={handleChange}
    >
      {children}
    </select>
  </div>
)

MultiSelect.propTypes = {
  className: PropTypes.string,
  labelFor: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  label: PropTypes.string,
}

MultiSelect.defaultProps = {
  className: 'form-group',
  labelFor: 'checkbox',
  value: [],
  handleChange() {},
  label: 'MultiSelect',
}

export default MultiSelect
