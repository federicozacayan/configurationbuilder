import React from 'react';

export default function RequestSelect({ requests, index, setIndex }) {
  const noneRequests = requests.length === 0;

  const handleChange = (e) => {
    const { value } = e.target;
    setIndex(value);
  };

  return (
    <>
      <select
        className="form-select"
        size={10}
        aria-label="Size 3 select example"
        onChange={handleChange}
        value={index}
      >
        {noneRequests && <option value="" defaultValue>None service-request created</option>}
        {requests.map((request, id) => (
          <option key={id} value={id}>
            {request.name}
          </option>
        ))}
      </select>

      {noneRequests ? (
        <button
          type="submit"
          className="btn btn-success mt-3"
          onClick={() => {
            // Add your create logic here
          }}
        >
          Create Request
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-danger mt-3"
          onClick={() => {
            // Add your delete logic here
          }}
        >
          Delete
        </button>
      )}
    </>
  );
}
