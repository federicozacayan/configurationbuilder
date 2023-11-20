import React, { useState } from 'react';
import Select from '../header/Select';
import useLocalStorage from '../../tools/UseLocalStorage';
import { requests as dummyRequests, body as placeholder } from '../../tools/DummyData';
import eventBus from '../../tools/EventBus';
import pages from '../Pages';

export default function Body() {
    const [requestList, setRequestList] = useLocalStorage('requests', dummyRequests);
    const [index, setIndex] = useLocalStorage('requestIndex', 0);
    const [tmpBody, setTmpBody] = useLocalStorage('tmpBody', placeholder);
    
    console.log('index', index);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setTmpBody(newValue);
    };

    let valueStored = requestList[index]?.data?.body || placeholder;

    const disableBtn = tmpBody === valueStored; // Simplified condition

    const save = () => {
        setRequestList((prevData) => {
            const newData = [...prevData]; // Create a copy to avoid mutating state directly
            newData[index].data.body = tmpBody;
            return newData;
        });
    };

    const discardChanges = () => {
        setTmpBody(valueStored);
    };
    const editRequest = () => {
        eventBus.dispatch("goto", pages.Request)
    }

    const setIndexWrapper = (value) => {
        setIndex(value);
        setTmpBody(requestList[value]?.data?.body || placeholder);
    }
    return (
        <div className="container">
            <h1>Body</h1>
            <div className="row">
                <div className="col-sm-6 ">
                    <div className="row mb-3">
                        <Select requests={requestList} index={index} setIndex={setIndexWrapper} />
                    </div>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder={placeholder}
                            id="floatingTextarea2"
                            style={{ height: '50vh' }}
                            value={tmpBody} // Use tmpBody here instead of valueStored
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingTextarea2">Json</label>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <button
                                type="button" // Specify the type to avoid form submission
                                className="btn btn-success"
                                onClick={save}
                                disabled={disableBtn}
                            >
                                Save
                            </button>

                            <button
                                type="button" // Specify the type to avoid form submission
                                className="btn btn-secondary ms-3"
                                onClick={discardChanges}
                                disabled={disableBtn}
                            >
                                Discard Changes
                            </button>
                            <button type="submit" className="btn btn-info mt-2"
                                onClick={editRequest}>Edit Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
