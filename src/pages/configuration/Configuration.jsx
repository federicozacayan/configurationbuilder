import React from 'react'
import useLocalStorage from '../../tools/UseLocalStorage';
import {mappingList as dummyMappingList, requests as dummyRequests } from '../../tools/DummyData';

export default function Configuration() {
    const [requestList, setRequestList] = useLocalStorage('requests', dummyRequests);
    const [mappingList, setMappingList] = useLocalStorage('mappingList', dummyMappingList);
    const conf = {
        "requests": requestList,
        "mappings": mappingList
    }
    return (
        <div className="container">
            <h1>Configuration</h1>
            <div className="row">
                <div className="col-sm-6 ">
                    <pre>
                        {JSON.stringify(conf, 0, 2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}
