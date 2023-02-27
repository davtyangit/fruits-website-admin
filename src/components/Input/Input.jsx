import React from 'react'

export const Input = ({ placeholder, type, value, handleChange, className }) => {
    return (
        <input className={className} type={type} placeholder={placeholder} value={value} onChange={handleChange} />
    )
}
