import React from 'react'

export default function Actions() {
  return (

    <div className="container">
      <h1 className="mb-5">Actions</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Benefit" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
            {'{'}/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Benefit" /> */{'}'}
            <select className="form-select" aria-label="Default select example">
              <option defaultValue="">Choose</option>
              <option value="{1}">Request</option>
              <option value="{2}">Mapping</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Action (Dinamic)</label>
            {'{'}/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Benefit" /> */{'}'}
            <select className="form-select" aria-label="Default select example">
              <option defaultValue="">Choose</option>
              <option value="{1}">Request 1</option>
              <option value="{2}">Request 2</option>
              <option value="{3}">Request 3</option>
              <option value="{4}">Mapping 1</option>
              <option value="{5}">Mapping 2</option>
              <option value="{6}">Mapping 3</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}
