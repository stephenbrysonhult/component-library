import React from 'react'
import PropTypes from 'prop-types'
import Select from './select'
import CheckBox from './checkbox'
import Input from './input'

import './input.scss'

function GetInput(props) {
  switch (props.type) {
    case 'select':
      return <Select {...props} />
    case 'checkbox':
      return <CheckBox {...props} />
    default:
      return <Input {...props} />
  }
}

function styleClass({ type, isValid }) {
  const className = ['input']
  if (type === 'checkbox') className.push('input--checkbox')
  if (type === 'select') className.push('input--select')
  if (!isValid) className.push('input--error')

  return className.join(' ')
}

const InputWrapper = props => (
  <div className={styleClass(props)}>
    {props.label && (
      <label htmlFor={props.id} className="g--font-span--light input__label">
        {props.label}
      </label>
    )}
    <GetInput {...props} />
  </div>
)

InputWrapper.defaultProps = {
  id: '',
  className: 'input__field',
  label: '',
  type: 'text',
  isSearch: false,
  isValid: true,
}

InputWrapper.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  isSearch: PropTypes.bool,
  isValid: PropTypes.bool,
}

export default InputWrapper
