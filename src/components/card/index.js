import React from 'react'
import PropTypes from 'prop-types'

import './card.scss'

const Card = ({ className, children }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
)
 
Card.defaultProps = {
  className: '',
}

Card.propTypes = {
  className: PropTypes.string,
}

export default Card