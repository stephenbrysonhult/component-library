import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card'

import './career-match.scss'

const CareerMatch = ({ className }) => (
  <Card className={`career-match ${className}`}>
    test
  </Card>
)
 
CareerMatch.defaultProps = {
  className: '',
}

CareerMatch.propTypes = {
  className: PropTypes.string,
}

export default CareerMatch