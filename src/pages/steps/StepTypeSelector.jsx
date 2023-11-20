import React from 'react'

export default function StepTypeSelector({ step, onChange, value }) {
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Step Type</label>
            <select className="form-select"
                defaultValue={value}
                onChange={onChange}>
                <option value={"*"}>--SELECT STEP TYPE--</option>
                <option value={"request"}>Request</option>
                <option value={"mapping"}>Mapping</option>
            </select>
        </div>
    )
}
