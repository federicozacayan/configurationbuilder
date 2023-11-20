import React from 'react'
import SelectRequest from '../steps/SelectRequest'
import SelectMapping from '../steps/SelectMapping'

export default function ObjectSelector({ objectType, objectName, changeSource, label}) {
    return (
        <div className="mb-3">
            {(objectType != "") && <label htmlFor="exampleInputEmail1" className="form-label">{label||'[LABEL]'}</label>}
            {(objectType == "request") && <SelectRequest onChange={changeSource} value={objectName} />}
            {(objectType == "mapping") && <SelectMapping onChange={changeSource} value={objectName} />}
        </div>
    )
}
