import * as React from 'react'
import styles from './styles.module.css'
import Ripples from 'react-ripples'

export interface ButtonProps {
  variant?: string
  text: string
  disabled?: boolean
  disableElevation?: boolean
  onClick?: () => void
}

export const Button = React.memo(
  ({
    text,
    variant = 'default',
    disabled = false,
    disableElevation = false,
    // eslint-disable-next-line prettier/prettier
    onClick = () => { },
    ...props
  }: ButtonProps) => {
    let buttonStyles: string = styles.default
    switch (variant) {
      case 'primary':
        buttonStyles += ' ' + styles.primary
        break
      case 'secondary':
        buttonStyles += ' ' + styles.secondary
        break
      default:
        break
    }
    if (disabled) {
      buttonStyles += ' ' + styles.disabled
    }
    if (disableElevation) {
      buttonStyles += ' ' + styles.disableElevation
    }
    console.log(buttonStyles)
    return (
      <div style={{ margin: '1em', display: 'inline-block' }}>
        <Ripples>
          <button
            className={buttonStyles}
            disabled={disabled}
            onClick={onClick}
            {...props}
          >
            {text}
          </button>
        </Ripples>
      </div>
    )
  }
)
