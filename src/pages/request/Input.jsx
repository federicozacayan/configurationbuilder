import React from 'react'

export default function Input({value, onChange, name="undefinedName", label = "[LABEL]", description = "[DESCRIPTION]", width = "mb-3" }) {//, value = "[VALUE]", onChange = () => { }, type = "text" }
    return (
        <div className="row mb-3">
            <label className="col-sm-2 form-label" htmlFor="formGroupExampleInput" >{label}</label>
            <div className="col-sm-10">
                <input type="text" name={name} className="form-control" id="formGroupExampleInput" 
                placeholder={description} value={value} onChange={onChange}/>
            </div>
        </div>
    )
}
