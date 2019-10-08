// Packages
import React, { CSSProperties, PureComponent } from 'react'
import { If } from 'react-extras'

// UI
import { colors, radius, spacing } from '../theme'

interface InputProps {
  disabled?: boolean
  error?: string
  hint?: string
  id: string
  label?: string
  name: string
  onChange?: (e?: any) => void
  placeholder?: string
  required?: boolean
  style?: CSSProperties
  type: 'text' | 'email'
  value?: string
}

export class Input extends PureComponent<InputProps> {
  defaultProps = {
    type: 'text',
    disabled: false,
    required: false
  }

  render() {
    const {
      disabled,
      error,
      hint,
      id,
      label,
      name,
      onChange,
      placeholder,
      required,
      style,
      type,
      value
    } = this.props

    return (
      <div style={style}>
        <If condition={Boolean(label)}>
          <label htmlFor={id}>{label}</label>
        </If>

        <input
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />

        <If condition={Boolean(error)}>
          <span className="error">{error}</span>
        </If>

        <If condition={Boolean(hint)}>
          <span className="hint">{hint}</span>
        </If>

        <style jsx={true}>{`
          div {
            width: 100%;
          }

          label {
            font-size: 14px;
            font-weight: 500;
            display: block;
            margin-bottom: ${spacing.small};
            color: ${colors.gray.default};
          }

          input {
            width: 100%;
            padding: ${spacing.default};
            border-radius: ${radius.default};
            border: 1px solid ${colors.gray.lighter};
            font-size: 16px;
            line-height: 26px;
          }

          span {
            font-size: 12px;
            margin-top: ${spacing.small};
          }

          .hint {
            color: ${colors.gray.default};
          }
        `}</style>
      </div>
    )
  }
}
