import React from 'react'

export default function Select({ requests, index, setIndex }) {
    const noneRequests = requests.length === 0;
    const handleChange = (e) => {
        const { value } = e.target;
        setIndex(value);
    };
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Request</label>
            {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Benefit' /> */}

            <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleChange}
                defaultValue={index}>
                {noneRequests && <option value="" defaultValue>None service-request created</option>}
                {requests.map((request, id) => (
                    <option key={id} value={id}>
                        {request.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
