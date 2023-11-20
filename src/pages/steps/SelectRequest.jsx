import React from 'react'
import useLocalStorage from '../../tools/UseLocalStorage';
import { requests as dummyRequests } from '../../tools/DummyData';

export default function SelectRequest({ onChange, value }) {
    const [requestList, setRequestList] = useLocalStorage('requests', dummyRequests);
    const change = (e) => {
        onChange(e);
    }
    return (
        <select className="form-select" onChange={change} defaultValue={value}>
            <option value={""}>--SELECT A REQUEEST--</option>
            {requestList.map((request, index) => (
                <option key={index} value={request.name}>{request.name}</option>
            ))}
        </select>
    )
}
