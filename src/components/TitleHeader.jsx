import React from 'react'
import PropTypes from 'prop-types'

const TitleHeader = ({ className, title }) => (
  <h1 className={className}>{title}</h1>
)

TitleHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
}

TitleHeader.defaultProps = {
  className: 'text-center',
  title: 'Hello World',
}

export default TitleHeader
