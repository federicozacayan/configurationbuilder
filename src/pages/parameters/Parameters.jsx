import React from 'react'

export default function Parameters() {
    return (
        <div className='container'>
            <h1 className='mb-5'>Parameters</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="form-label">Key</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Content-Type" />
                        </div>
                        <div className="col">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Value</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="application/json" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            Variables
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">This variables can we used in whole flow</h5>
                            <p className="card-text">The process will replace the variables written in Requests, Headers, Mapers </p>
                            <p className="card-text">The format will be {'{'}`{'{'}{'{'}MY_VARIABLE{'}'}{'}'}`{'}'} or {'{'}`&lt;<my_variable>&gt;`{'}'}</my_variable></p>
                            {'{'}/* <a href="#" className="btn btn-primary">Go somewhere</a> */{'}'}
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Key</th>
                                <th scope="col">Value</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td className="d-flex justify-content-around">
                                    <i className="bi bi-pencil-square" />
                                    <i className="bi bi-x-circle-fill" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td className="d-flex justify-content-around">
                                    <i className="bi bi-pencil-square" />
                                    <i className="bi bi-x-circle-fill" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="{2}">Larry the Bird</td>
                                <td className="d-flex justify-content-around">
                                    <i className="bi bi-pencil-square" />
                                    <i className="bi bi-x-circle-fill" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
