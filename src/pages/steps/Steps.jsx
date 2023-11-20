import React from 'react'
import useLocalStorage from '../../tools/UseLocalStorage';
import { step as dummyStep } from '../../tools/DummyData';
import SelectRequest from './SelectRequest';
import SelectMapping from './SelectMapping';
import Table from './Table';
import StepTypeSelector from './StepTypeSelector';

export default function Steps() {
  const [stepType, setStepType] = useLocalStorage('stepType', "");
  const [step, setStep] = useLocalStorage('step', dummyStep)
  const [stepList, setStepList] = useLocalStorage('steps', []);

  const addStep = () => {
    setStepType("*")
    setStepList([...stepList, step])
    setStep(dummyStep)
  }

  const setStepDescription = (e) => {
    setStep({ ...step, description: e.target.value })
  }
  const setStepName = (e) => {
    setStep({ ...step, name: e.target.value })
  }
  const setStepTypeHandler = (e) => {
    console.log('e.target.value', e.target.value);
    setStepType(e.target.value)
    setStep({ ...step, type: e.target.value })
  }
  console.log('stepType ***********************', stepType);
  return (
    <div className="container">
      <h1 className="mb-5">Steps</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
            <input type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={step.description}
              aria-describedby="emailHelp"
              onChange={setStepDescription}
              placeholder="Benefit" />
          </div>
          <StepTypeSelector step={step} onChange={setStepTypeHandler} value={stepType}/>
          <div className="mb-3">
            {(stepType != "") && <label htmlFor="exampleInputEmail1" className="form-label">Action (Dinamic)</label>}
            {(stepType == "request") && <SelectRequest onChange={setStepName} value={step?.name||""} />}
            {(stepType == "mapping") && <SelectMapping onChange={setStepName} />}
          </div>
          <pre>
            {JSON.stringify(step, 0, 2)}
          </pre>
          {/* //button */}
          <div className="mb-3">
            <button type="button"
              className="btn btn-primary"
              onClick={addStep}>Add Step</button>
          </div>
        </div>
        <div className="col-sm-6">
          <Table stepList={stepList}/>
        </div>
      </div>
    </div>

  )
}
