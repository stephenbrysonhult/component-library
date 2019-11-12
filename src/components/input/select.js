import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '../font-awesome'

const Select = ({
  id,
  className,
  type,
  placeholder,
  children,
  onChange,
  onBlur,
  value,
}) => (
  <>
    <select
      className={className}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      // value={value || ''}
      required="required"
    >
      <option disabled={true} value={''} selected>
        {placeholder}
      </option>
      {children}
    </select>
    <FontAwesome className="input__icon" icon="angle-down" type="far"/>
  </>
)

Select.defaultProps = {
  id: '',
  className: '',
  label: '',
  type: 'select',
  placeholder: 'Please select',
  value: '',
  onChange: () => {},
  onBlur: () => {},
}

Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default Select
