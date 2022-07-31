import React from 'react'
import PropTypes from 'prop-types'

const Column = ({ className, children }) => (
  <div className={className}>{children}</div>
)

Column.propTypes = {
  className: PropTypes.string,
}

Column.defaultProps = {
  className: 'col-md-6 offset-md-3',
}

export default Column
