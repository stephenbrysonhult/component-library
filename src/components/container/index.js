import React from 'react'
import PropTypes from 'prop-types'
import './container.scss'

const Container = ({ className, children }) => (
  <div className={`container ${className}`}>    
    {children}
  </div>
)
 
Container.defaultProps = {
  className: '',
}

Container.propTypes = {
  className: PropTypes.string,
}

export default Container