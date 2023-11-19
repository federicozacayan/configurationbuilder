import React, { useState } from 'react'
import Input from './Input'
import useLocalStorage from '../../tools/UseLocalStorage';
import { requests as dummyRequests } from '../../tools/DummyData';
import eventBus from '../../tools/EventBus';
import pages from '../Pages';

export default function RequestForm({ request, handleDataChange, handleNameChange, setRequest, index, setIndex }) {
    const [requestList, setRequestList] = useLocalStorage('requests', dummyRequests);
    
    const disableBtn = (() => {
        const { headers, ...storedObj } = requestList[index]?.data || {}
        const { headers: headers2, ...currentObj } = request?.data || {}
        const equalData = JSON.stringify(storedObj) == JSON.stringify(currentObj) && requestList[index]
        const equalName = requestList[index]?.name == request?.name
        return equalData && equalName 
    })()
    
    const cloneRequest = () => {
        setIndex(requestList.length)
        setRequestList((prevData) => {
            prevData.push(request);
            return prevData;
        });
        eventBus.dispatch("goto", pages.Actions)
        setTimeout(() => {
            console.log('goto request delay')
            eventBus.dispatch("goto", pages.Request)
        }, 100);
        
    }
    const save = () => {
        setRequestList((prevData) => {
            prevData[index] = request;
            return prevData;
        });
        eventBus.dispatch("goto", pages.Actions)
        setTimeout(() => {
            eventBus.dispatch("goto", pages.Request)
        }, 100);
    }
    const addHeaders = () => {
        eventBus.dispatch("goto", pages.Header)
    }
    const discardChanges = () => {
        console.log('discardChanges index', index);
        setRequest(requestList[index])
    }
    // console.log(JSON.stringify(requestList[index]), JSON.stringify(request));
    return (
        <div className="col-sm-6">
            <form className="row">
                <Input label='Name' name='name' value={request.name} onChange={handleNameChange} description='Friendly name of the request' width='col-12' />
                <Input label='Protocol' name="protocol" value={request.data.protocol} onChange={handleDataChange} description='http  of https' width='col-md-2' />
                <Input label='Host' name="host" value={request.data.host} onChange={handleDataChange} description='127.0.0.1, localhost, servicedomain.com' width='col-md-4' />
                <Input label='Port' name="port" value={request.data.port} onChange={handleDataChange} description='80, 8080, 8888' width='col-md-2' />
                <Input label='Path' name="path" value={request.data.path} onChange={handleDataChange} description='"/", "/action", "/source?id=123"' />
                <Input label='Method' name="method" value={request.data.method} onChange={handleDataChange} description='GET, POST, PUT, DELETE' width='col-md-2' />
            </form>
            <button type="submit"
                className="btn btn-primary"
                onClick={save}
                disabled={disableBtn}
            >Save</button>
            <button type="submit"
                className="btn btn-primary ms-2"
                onClick={discardChanges}
                disabled={disableBtn || !requestList[index]}
            >Discard Changes</button>
            <button type="submit"pass
                className="btn btn-info ms-2"
                onClick={addHeaders}
                disabled={!disableBtn}
            >Add Headers</button>
            <button type="submit"pass
                className="btn btn-success ms-2"
                onClick={cloneRequest}
                disabled={JSON.stringify(requestList[index]) != JSON.stringify(request)}
            >Clone Request</button>
        </div>
    )
}
