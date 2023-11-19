import React from 'react';

export default function Modal({deleteHeader, index}) {
    const deleteItem = () => {
        deleteHeader(index)
    }
  return (
    <>
      <div className="modal" tabIndex={-1} id="deleteHeader">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">DELETE HEADER</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p>This action cannot be undone. Are you sure you want to delete this header?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-danger"
               data-bs-dismiss="modal" aria-label="Close"
              onClick={deleteItem}>
                Delete Header
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


