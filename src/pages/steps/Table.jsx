import React from 'react'

export default function Table({ stepList, onclick, up, down, deleteItem }) {
    const click = (value, e) => {
        e.preventDefault();
        onclick(value)
    }
    const foward = (value, e) => {
        e.preventDefault();
        down(value)
    }
    const backward = (value, e) => {
        e.preventDefault();
        up(value)
    }
    const deleteStep = (value, e) => {
        e.preventDefault();
        deleteItem(value)
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Action</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {stepList.map((step, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                            <a href="#" onClick={(e)=>click(index, e)}>{step.name }</a>
                        </td>
                        <td>
                            <a href="#" onClick={(e)=>click(index, e)}>{step.type}</a>
                        </td>
                        <td>
                            <a href="#" onClick={(e)=>click(index, e)}>{ step.description}</a>
                        </td>
                        <td className="d-flex justify-content-around">
                            <a href="#" onClick={(e)=>click(index, e)}><i className="bi bi-pencil-square" /></a>
                            <a href="#" onClick={(e)=>deleteStep(index, e)}><i className="bi bi-x-circle-fill" /></a>
                            {(index == 0) ?<a href="#" onClick={(e)=>foward(index, e)}><i className="bi bi-arrow-down" /></a>:""}
                            {(index == stepList.length-1) ?<a href="#" onClick={(e)=>backward(index, e)}><i className="bi bi-arrow-up" /></a>:""}
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
