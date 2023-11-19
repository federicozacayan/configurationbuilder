import React, { useState } from 'react'
import Input from './Input'
import useLocalStorage from '../../tools/UseLocalStorage';
import { request as dummyRequest, requests as dummyRequests } from '../../tools/DummyData';
import RequestSelect from './RequestSelect';
import RequestTable from './RequestTable';
import RequestForm from './RequestForm';

export default function Request() {
    const [request, setRequest] = useLocalStorage('request', dummyRequest);
    const [requestList, setRequestList] = useLocalStorage('requests', dummyRequests);
    const [index, setIndex] = useLocalStorage('requestIndex', 0);
    console.log("getting index", index);
    const setIndex2 = (value) => {
        setIndex(value);
        setRequest(requestList[value]);
    }
    const handleDataChange = (e) => {
        setIndex(index)
        const { name, value } = e.target;
        setRequest((prevData) => ({
            ...prevData,
            data: {
                ...prevData.data,
                [name]: value,
            },
        }));
    };
    const handleNameChange = (e) => {
        setIndex(index)
        const { name, value } = e.target;
        setRequest((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='container'>
            <h1 className='mb-5'>Request</h1>
            <div className="row">
                <RequestForm request={request}
                    handleDataChange={handleDataChange}
                    handleNameChange={handleNameChange}
                    setRequest={setRequest}
                    index={index}
                    setIndex={setIndex} />
                <div className="col-sm-6">

                    <RequestSelect requests={requestList} index={index} setIndex={setIndex2} />
                    {/* <RequestTable /> */}
                </div>
            </div>
        </div>
    )
}