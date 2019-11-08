import React from 'react'
import PropTypes from 'prop-types'

import './font-awesome.scss' 

const FontAwesome = ({ icon, type }) => (
  <i className={`${type} fa-${icon}`}></i>
)

FontAwesome.defaultProps = {
  icon: 'check', 
  type: 'fas'
}

FontAwesome.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
}

export default FontAwesome
