import React from 'react'
import PropTypes from 'prop-types'

import './progress.scss'

const Progress = ({ percentage }) => (
  <div className="progress">
    <div className="progress__indicator" style={{width: `${percentage}%`}} />
  </div>
)
 
Progress.defaultProps = {
  percentage: '',
}

Progress.propTypes = {
  percentage: PropTypes.string,
}

export default Progress