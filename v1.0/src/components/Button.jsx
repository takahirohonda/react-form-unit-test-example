import React from 'react'

const Button = ({ href, children }) => {
  const Tag = href ? 'a' : 'button'
  return <Tag href={href}>{children}</Tag>
}

export default Button
