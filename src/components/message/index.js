import React from 'react'
import PropTypes from 'prop-types'

import './message.scss'
import FontAwesome from '../font-awesome'

const Message = ({ avatar, message }) => (
  <div className="message">
    <div className="message__avatar">
      <FontAwesome icon={avatar} type="far" />
    </div>
    <p className="message__content g--font-span--light g--margin-none">{message}</p>
  </div>
)
 
Message.defaultProps = {
  avatar: 'smile',
  message: '',
}

Message.propTypes = {
  shock: PropTypes.string,
  message: PropTypes.string,
}

export default Message