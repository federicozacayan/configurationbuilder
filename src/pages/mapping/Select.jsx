import React from 'react'

export default function Select() {
    return (
        <select className="form-select form-select-sm" aria-label="Default select example">
            <option defaultValue="">Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
        </select>
    )
}
