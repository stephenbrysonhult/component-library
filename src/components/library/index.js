import React from 'react'
import PropTypes from 'prop-types'
import Container from '../container'

import './library.scss'

const Library = ({ title, children }) => (
  <div className="library">
      <Container>
        <section className="library__section">
          <div className="library__info">
            <h3 className="library__title">{title}</h3>
          </div>
          <div className="library__content">
            {children}
          </div>
        </section>
      </Container>
    </div>
)
 
Library.defaultProps = {
  title: 'Heading',
}

Library.propTypes = {
  title: PropTypes.string,
}

export default Library