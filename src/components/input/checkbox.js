import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '../font-awesome'

const CheckBox = props => (
  <>
    <div className={props.className}>
      <input
        className="input__checkbox-input"
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        // checked={props.checked}
      />
      <FontAwesome className="input__icon" icon="check" type="far"/>
    </div>
  </>
)

CheckBox.defaultProps = {
  id: '',
  className: '',
  label: '',
  type: 'checkbox',
  checked: false,
  onChange: () => {},
}

CheckBox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default CheckBox
