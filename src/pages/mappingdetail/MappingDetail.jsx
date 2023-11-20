import React, { useState } from 'react'
import useLocalStorage from '../../tools/UseLocalStorage';
import { mapping as dummyMapping } from '../../tools/DummyData';
import Table from './Table';
import Objecthandler from './Objecthandler';

export default function MappingDetail() {
  const [mapping, setMapping] = useLocalStorage('mapping', dummyMapping);
  const [JsonPath, setJsonPath] = useState({ source: "", target: "" });
  const [index, setIndex] = useState(0);
  const changeSourceType = (value) => {
    setMapping({
      ...mapping,
      params: {
        ...mapping.params,
        objects: {
          ...mapping.params.objects,
          source: {
            ...mapping.params.objects.source,
            type: value
          }
        }
      }
    });
  }
  const changeSourceName = (value) => {
    setMapping({
      ...mapping,
      params: {
        ...mapping.params,
        objects: {
          ...mapping.params.objects,
          source: {
            ...mapping.params.objects.source,
            name: value
          }
        }
      }
    });
  }

  const changeTargetType = (value) => {
    setMapping({
      ...mapping,
      params: {
        ...mapping.params,
        objects: {
          ...mapping.params.objects,
          target: {
            ...mapping.params.objects.target,
            type: value
          }
        }
      }
    });
  }

  const changeTargetName = (value) => {
    setMapping({
      ...mapping,
      params: {
        ...mapping.params,
        objects: {
          ...mapping.params.objects,
          target: {
            ...mapping.params.objects.target,
            name: value
          }
        }
      }
    });
  }
  const onClick = (index) => {
    setIndex(index);
    setJsonPath({ source: mapping.params.expressions[index].source, target: mapping.params.expressions[index].target });
  }

  const jsonPathSource = (e) => {
    setJsonPath({ ...JsonPath, source: e.target.value })
  }
  const jsonPathTarget = (e) => {
    setJsonPath({ ...JsonPath, target: e.target.value })
  }

  const disabledBtn = JSON.stringify(mapping.params.expressions[index], 0, 2) == JSON.stringify(
    { source: JsonPath.source, target: JsonPath.target }, 0, 2)


  const save = () => {
    const newMapping = { ...mapping };
    newMapping.params.expressions[index] = JsonPath
    setMapping(newMapping);
  }

  const discardChanges = () => {
    setJsonPath({ source: mapping.params.expressions[index].source, target: mapping.params.expressions[index].target });
  }
  const changeName = (e) => {
    setMapping({ ...mapping, name: e.target.value });
  }

  const deleteJsonPathMapping = (index) => {
    const newMapping = { ...mapping };
    newMapping.params.expressions.splice(index, 1);
    setMapping(newMapping);
  }

  const cloneJsonPathMapping = () => {
    const newMapping = { ...mapping };
    newMapping.params.expressions.push(JsonPath);
    setMapping(newMapping);
  }
    
  return (
    <div className='container'>
      <h1 className='mb-5'>Mapping</h1>
      <div className="row">

        <div className="col-sm-6">
          <div className="row">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input
                value={mapping.name}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                onChange={changeName}
                placeholder="Benefit" />
            </div>
            <Objecthandler
              typeLabel={"Source type"}
              nameLabel={"Source Name"}
              sourceTypeIn={mapping.params.objects.source.type}
              sourceValueIn={mapping.params.objects.source.name}
              changeSourceType={changeSourceType} changeSourceName={changeSourceName} />

            <Objecthandler
              typeLabel={"Target type"}
              nameLabel={"Target Name"}
              sourceTypeIn={mapping.params.objects.target.type}
              sourceValueIn={mapping.params.objects.target.name}
              changeSourceType={changeTargetType} changeSourceName={changeTargetName} />

            <div className="col-6">
              <label htmlFor="exampleInputEmail1" className="form-label">JsonPath source</label>
              <input type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={JsonPath.source}
                onChange={jsonPathSource}
                placeholder="$.store.book[1].title" />
            </div>
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">JsonPath target</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={JsonPath.target}
                onChange={jsonPathTarget}
                placeholder="$.masterAgreementNumber" />
            </div>

            <div className="col-12 mt-3">
              <button type="submit"
                className="btn btn-primary"
                disabled={disabledBtn}
                onClick={save}>Sign in</button>
              {/* //discard Changes */}

              <button
                type="submit"
                className="btn btn-secondary ms-2"
                onClick={discardChanges}
                disabled={disabledBtn}
                >Discard Changes</button>
            {/* //Cone JsonPath btn */}
              <button type="submit" 
              className="btn btn-primary ms-2"
              disabled={!disabledBtn}
              onClick={cloneJsonPathMapping}
              >Cone JsonPath</button>
            </div>

          </div>
        </div>


        <div className="col-sm-6">
          <Table mapping={mapping} onClick={onClick} doleteItem={deleteJsonPathMapping} />
        </div>
      </div>
    </div>
  )
}
