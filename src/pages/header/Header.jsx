import React, { useState } from 'react'
import Select from './Select'
import useLocalStorage from '../../tools/UseLocalStorage';
import { request as dummyRequest, requests as dummyRequests, header as dummyHeader } from '../../tools/DummyData';
import Input from './Input';
import eventBus from '../../tools/EventBus';
import pages from '../Pages';
import Table from './Table';
import Modal from './Modal';
import ModalConfirmation from './ModalConfirmation';
export default function Header() {

  const [flag, setFlag] = useState(false)
  const [requestList, setRequestList] = useLocalStorage('requests', dummyRequest);
  const [header, setHeader] = useLocalStorage('header', dummyHeader);
  const [index, setIndex] = useLocalStorage('requestIndex', 0);
  const [headerIndex, setHeaderIndex] = useLocalStorage('headerIndex', 0);

  if (requestList.length === 0 || !requestList[index] || !requestList[index].data || !requestList[index].data.headers) {
    eventBus.dispatch("goto", pages.Request)
    return <div>Redirecting...</div>
  }
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  let currentHeaderList = requestList[index].data.headers
  if (!currentHeaderList[headerIndex]) {
    setHeaderIndex(0)
    setHeader(currentHeaderList[0])
  }
  let disableBtn = JSON.stringify(header) == JSON.stringify(currentHeaderList[headerIndex])
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setHeader((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  //delete header

  const deleteHeader = (index) => {
    currentHeaderList.splice(index, 1)
    setRequestList(requestList)
    setHeaderIndex(0)
    setHeader(currentHeaderList[0])
  }
  const newHeader = () => {
    currentHeaderList.push(header)
    setRequestList(requestList)
    setHeaderIndex(currentHeaderList.length - 1)
  }
  const selectHeader = (index) => {
    setHeaderIndex(index)
    setHeader(currentHeaderList[index])
  }
  const saveHeader = () => {
    if (currentHeaderList.length > 0) {
      currentHeaderList[headerIndex] = header
    } else {
      currentHeaderList = [header]
    }
    setRequestList(requestList)
    setFlag(!flag)
  }
  const discartChanges = () => {
    setHeader(currentHeaderList[headerIndex])
  }
  const editRequest = () => {
    eventBus.dispatch("goto", pages.Request)
  }
  return (
    <div className='container'>
      <h1 className='mb-5'>Header</h1>
      <div className="row">
        <div className="col-sm-6 ">
          <div className="row mb-3">
            <Select requests={requestList} index={index} setIndex={setIndex} />
            <Input label='Key' name='key' value={header.key} onChange={handleNameChange} placeholder='Content Type' width='col-12' />
            <Input label='Key' name='value' value={header.value} onChange={handleNameChange} placeholder='application/json' width='col-12' />
          </div>
          <button type="submit" className="btn btn-primary"
            disabled={disableBtn}
            data-bs-toggle="modal" data-bs-target="#updateHeader"
            // onClick={saveHeader}
            >Save</button>
          <button type="submit" className="btn btn-secondary ms-2"
            disabled={disableBtn}
            onClick={discartChanges}>Discard Changes</button>
          <button type="submit" className="btn btn-success ms-2"
            onClick={newHeader}>New Header</button>
          <br />
          <button type="submit" className="btn btn-info mt-2"
            onClick={editRequest}>Edit Request</button>

        </div>
        <div className="col-sm-6">
          <Table headers={currentHeaderList} setHeaderIndex={selectHeader} />

          <Modal deleteHeader={deleteHeader} index={headerIndex} currentHeader={currentHeaderList[headerIndex]} />
          <ModalConfirmation saveHeader={saveHeader} header={header} currentHeader={currentHeaderList[headerIndex]} />
        </div>
      </div>
    </div>
  )
}
