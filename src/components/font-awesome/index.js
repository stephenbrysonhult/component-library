import React from 'react'
import PropTypes from 'prop-types'
import './font-awesome.scss' 

const FontAwesome = ({ className, icon, type }) => (
  <i className={`${className} ${type} fa-${icon}`}></i>
)

FontAwesome.defaultProps = {
  className: '', 
  icon: 'check', 
  type: 'fas'
}

FontAwesome.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
}

export default FontAwesome
