import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '../font-awesome'

function styleClass(isValid, icon) {
  const className = ['input__field', 'input__field--text']
  if (!isValid) className.push('input__field--error')
  if (icon !== '') className.push('input__field--has-icon')
  return className.join(' ')
}

const Input = ({
  id,
  type,
  className,
  placeholder,
  onChange,
  onBlur,
  name,
  value,
  icon,
  autocomplete,
  isValid,
}) => (
  <>
    <input
      className={styleClass(isValid)}
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      // value={value}
      required="required"
      placeholder={placeholder}
      autoComplete={autocomplete}
    />
    {icon && (
      <FontAwesome className="input__icon" icon={icon} type="far" />
    )}
  </>
)

Input.defaultProps = {
  id: '',
  autocomplete: 'no',
  className: '',
  placeholder: '',
  value: '',
  name: '',
  type: 'email',
  icon: '',
  isValid: true,
  onChange: () => {},
  onBlur: () => {},
}

Input.propTypes = {
  id: PropTypes.string,
  autocomplete: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isValid: PropTypes.bool,
}

export default Input
