import React from 'react'

export default function Table({stepList}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Action</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {stepList.map((step, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{step.name}</td>
                        <td>{step.type}</td>
                        <td className="d-flex justify-content-around">
                            <i className="bi bi-pencil-square" />
                            <i className="bi bi-x-circle-fill" />
                            <i className="bi bi-arrow-down" />
                            <i className="bi bi-arrow-up" />
                        </td>
                    </tr>
                ))}
                {/* 
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className="d-flex justify-content-around">
                        <i className="bi bi-pencil-square" />
                        <i className="bi bi-x-circle-fill" />
                        <i className="bi bi-arrow-down" />
                        <i className="bi bi-arrow-up" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td className="d-flex justify-content-around">
                        <i className="bi bi-pencil-square" />
                        <i className="bi bi-x-circle-fill" />
                        <i className="bi bi-arrow-down" />
                        <i className="bi bi-arrow-up" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="{2}">Larry the Bird</td>
                    <td className="d-flex justify-content-around">
                        <i className="bi bi-pencil-square" />
                        <i className="bi bi-x-circle-fill" />
                        <i className="bi bi-arrow-down" />
                        <i className="bi bi-arrow-up" />
                    </td>
                </tr> */}
            </tbody>
        </table>
    )
}
