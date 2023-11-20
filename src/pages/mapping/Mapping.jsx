import React, { useState } from 'react'
import useLocalStorage from '../../tools/UseLocalStorage';
import { mapping as dummyMapping, mappingList as dummyMappingList } from '../../tools/DummyData';
import eventBus from '../../tools/EventBus';
import pages from '../Pages';


export default function Mapping() {
  const [mappingList, setMappingList] = useLocalStorage('mappingList', dummyMappingList);
  const [mappingListIndex, setMappingListIndex] = useLocalStorage('mappingListIndex', 0);
  const [mappingName, setMappingName] = useLocalStorage('mappingName', "");
  const [index, setIndex] = useState(0);
  const onChange = (e) => {
    const index = e.target.selectedIndex;
    console.log(index);
    setIndex(index);
    setMappingListIndex(index);
    setMappingName(mappingList[index].name);
    // setJsonPath({ source: mapping.params.expressions[index].source, target: mapping.params.expressions[index].target });
  }
  const refresh = () => {
    eventBus.dispatch("goto", pages.Empty)
    setTimeout(() => {
      eventBus.dispatch("goto", pages.Mapping)
    }, 1);
  }
  const discardChanges = () => {
    setMappingName(mappingList[mappingListIndex].name);
  }

  const addMappingDetails = () => {
    eventBus.dispatch("goto", pages.MappingDetails)
  }
  const cloneMapping = () => {
    const index = mappingList.length
    setMappingListIndex(index)//infrement the index
    setMappingList((prevData) => {
      prevData[index] = mappingList[mappingListIndex];
      return prevData;
    });
    refresh()
    console.log('mapping cloned ')
  }
  const save = () => {

    setMappingList((prevData) => {
      prevData[mappingListIndex].name = mappingName;
      return prevData;
    });
    refresh()
  }

  const changeName = (e) => {
    setMappingName(e.target.value);
  }
  const disableBtn = JSON.stringify(mappingList[mappingListIndex].name) == JSON.stringify(mappingName);

  return (
    <div className='container'>
      <h1 className='mb-5'>Mapping</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={mappingName}
                onChange={changeName}
                placeholder="Mapping Name" />
            </div>
          </div>

          <button type="submit"
            className="btn btn-primary"
            onClick={save}
            disabled={disableBtn}
          >Save</button>
          <button type="submit"
            className="btn btn-secondary ms-2"
            onClick={discardChanges}
            disabled={disableBtn}
          >Discard Changes</button>
          <button type="submit" pass
            className="btn btn-success ms-2"
            onClick={cloneMapping}
            disabled={!disableBtn}
          >Clone Mapping</button>
          <br />
          <button type="submit" pass
            className="btn btn-info mt-2"
          onClick={addMappingDetails}
          // disabled={!disableBtn}
          >Mapping Details</button>
        </div>


        <div className="col-sm-6">
          <select
            className="form-select"
            size={10}
            onChange={onChange}
            aria-label="Size 3 select example"
          >
            {!mappingList.length && <option value="" defaultValue>None mapping created</option>}
            {Array.isArray(mappingList) && mappingList.map((mapping, id) => (
              <option key={id} value={mapping}>
                {mapping.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="btn btn-danger mt-3"
            data-bs-toggle="modal" data-bs-target="#deleteRequest"
          // onClick={() => {
          //   // Add your delete logic here
          // }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
