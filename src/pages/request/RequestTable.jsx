import React from 'react'

export default function RequestTable() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">COL1</th>
                    <th scope="col">COL2</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className='d-flex justify-content-around'>
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-x-circle-fill"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td className='d-flex justify-content-around'>
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-x-circle-fill"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td className='d-flex justify-content-around'>
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-x-circle-fill"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
