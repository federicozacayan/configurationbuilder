import React from 'react'

export default function Input({ label = "[label]", name, value, onChange, placeholder }) {
    return (
        <div className="col">
            <label htmlFor="formGroupExampleInput" className="form-label" >{label}</label>
            <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange} />
        </div>
    )
}
