import React from 'react'
import PropTypes from 'prop-types'

import './color.scss'

const Library = ({ value, border }) => (
  <div className={`color ${border ? 'color--border' : ''}`} style={{backgroundColor: `${value}`}}/>
)
 
Library.defaultProps = {
  value: '',
  border: false,
}

Library.propTypes = {
  value: PropTypes.string,
  border: PropTypes.bool,
}

export default Library