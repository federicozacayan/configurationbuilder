import React from 'react'
import Select from './Select'

export default function Mapping() {
  return (
    <div className='container'>
      <h1 className='mb-5'>Mapping</h1>
      <div className="row">
        
      <div className="col-sm-6">
        <div className="row">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Benefit" />
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Object source</label>
              {'{'}/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */{'}'}
              <select>
                Object target
                {'{'}/* </select><input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */{'}'}
              <select>
                JsonPath target
              </select><input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="$.masterAgreementNumber" />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">JsonPath source</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="$.store.book[1].title" />
            </div>
          </div>
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
   
        
      <div className="col-sm-6">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">COL1<select /></th>
              <th scope="col">COL2<select /></th>
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
