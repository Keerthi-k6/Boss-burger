import React from 'react'
import InputContainer from '../InputContainer/InputContainer'
import styles from './Input.module.css'

function Input ({label,type,defaultValue,onChange,onBlur,name,error},ref) {

    const getErrorMessage = () => {
        if(!error) return error
        if(error.message) return error.message
        switch(error.type){
            case 'required':
                return 'This field is required'
            case 'minLength':
                return 'Field is too short'
            default:
                return '*'
        }
    }
  return (
    <InputContainer label = {label}>
        <input
            ref = {ref}
            type = {type}
            defaultValue = {defaultValue}
            placeholder={label}
            onChange={onChange}
            onBlur = {onBlur}
            name = {name}
            className = {styles.input}
        />
        {error && <div className = {styles.error}>{getErrorMessage()}</div>}
    </InputContainer>
  )
}

export default React.forwardRef(Input)
