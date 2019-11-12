import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '../font-awesome';
import './button.scss'

const Button = ({ Wrapper, wrapperProps, label, icon, className, disabled, variant }) => (
  <Wrapper {...wrapperProps} className={`button ${className} button--${variant} ${disabled ? 'button--disabled' : ''}`}>
    <span className="button__label g--font-body-bold--light">{label}</span>
    {icon && (
      <FontAwesome className="button__icon" icon={icon} type="far"/>
    )}
  </Wrapper>
)
 
Button.defaultProps = {
  Wrapper: 'div', 
  wrapperProps: {},
  label: 'Button label',
  icon: '',
  className: '',
  disabled: false,
  variant: 'secondary',
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
  disabled: PropTypes.bool,
  variant: PropTypes.string,
}

export default Button
