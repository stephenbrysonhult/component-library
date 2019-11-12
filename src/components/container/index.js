import React from 'react'
import PropTypes from 'prop-types'
import './container.scss'

const Container = ({ className, noPadding, children }) => (
  <div className={`container ${className} ${noPadding ? 'container--no-padding' : ''}`}>    
    {children}
  </div>
)
 
Container.defaultProps = {
  className: '',
  noPadding: false,
}

Container.propTypes = {
  className: PropTypes.string,
  noPadding: PropTypes.bool,
}

export default Container