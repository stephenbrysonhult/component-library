import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@bit/hult.careermapper.font-awesome';
import '@bit/hult.careermapper.assets/scss/_typography.scss';


import './button.scss'

const Button = ({ Wrapper, wrapperProps, label, icon, className }) => (
  <Wrapper {...wrapperProps} className={`button ${className}`}>
    <span className="button__label">{label}</span>
    {icon && (
      <FontAwesome icon={icon} type="far"/>
    )}
  </Wrapper>
)

Button.defaultProps = {
  Wrapper: 'div',
  wrapperProps: {},
  label: 'Button label',
  icon: 'check',
  className: '',
}

Button.propTypes = {
  Wrapper: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  wrapperProps: PropTypes.shape({}),
  label: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
}

export default Button
