import React from 'react'
import useLocalStorage from '../../tools/UseLocalStorage';
import { step as dummyStep } from '../../tools/DummyData';
import SelectRequest from './SelectRequest';
import SelectMapping from './SelectMapping';
import Table from './Table';
import StepTypeSelector from './StepTypeSelector';
import eventBus from '../../tools/EventBus';
import pages from '../Pages';

export default function Steps() {
  const [step, setStep] = useLocalStorage('step', dummyStep)
  const [stepType, setStepType] = useLocalStorage('stepType', "");
  const [stepList, setStepList] = useLocalStorage('steps', [dummyStep]);
  const [stepListIndex, setStepListIndex] = useLocalStorage('stepListIndex', 0);

  const refresh = () => {
    eventBus.dispatch("goto", pages.Empty)
    setTimeout(() => {
        eventBus.dispatch("goto", pages.Steps)
    }, 1);
  }
  const addStep = () => {
    stepList[stepListIndex] = step
    setStepList(stepList)
    refresh()
  }

  const cloneStep = () => {

    setStepList([...stepList, step])
    setStepListIndex(stepList.length)
    // setStep(dummyStep)
  }

  const setStepDescription = (e) => {
    setStep({ ...step, description: e.target.value })
  }
  const setStepName = (e) => {
    setStep({ ...step, name: e.target.value })
  }
  const setStepTypeHandler = (e) => {
    setStepType(e.target.value)
    setStep({ ...step, type: e.target.value })
  }

  const onclick = (value) => {
    setStepListIndex(value)
    refresh()
  }
  const discardChanges = () => {
    setStep(stepList[stepListIndex])
  }

  const  moveElement = (array, index, direction) =>{
    if (direction === 'forward' && index < array.length - 1) {
      // Check that it's not the last element when moving forward
      const currentElement = array[index];
      array[index] = array[index + 1];
      array[index + 1] = currentElement;
    } else if (direction === 'backward' && index > 0) {
      // Check that it's not the first element when moving backward
      const currentElement = array[index];
      array[index] = array[index - 1];
      array[index - 1] = currentElement;
    } else {
      console.log('Cannot perform the movement in that direction from the provided index.');
    }

  }

  const up = (value) => {
    moveElement(stepList, value, 'backward')
    setStepList([...stepList])
    refresh()
  }
  const down = (value) => {
    moveElement(stepList, value, 'forward')
    setStepList([...stepList])
    refresh()
  }
  const deleteStep = (value) => {
    stepList.splice(value, 1);
    setStepList([...stepList])
    refresh()
  }
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
          {/* <pre>
            {JSON.stringify(step, 0, 2)}
            {JSON.stringify(stepList[stepListIndex], 0, 2)}
          </pre> */}
          {/* //button */}
          <div className="mb-3">
            <button type="button"
              className="btn btn-primary"
              disabled={JSON.stringify(step) == JSON.stringify(stepList[stepListIndex])}
              onClick={addStep}>Add Step</button>
            {/* //Discard Changes */}
            <button type="button"
              className="btn btn-secondary ms-2"
              disabled={JSON.stringify(step) == JSON.stringify(stepList[stepListIndex])}
              onClick={discardChanges}>Discard Changes</button>
            {/* //Clone Step */}
            <button type="button"
              className="btn btn-success ms-2"
              // disabled={JSON.stringify(step) == JSON.stringify(stepList[stepListIndex])}
              onClick={cloneStep}>Clone Step</button>
          </div>
        </div>
        <div className="col-sm-6">
          <Table stepList={stepList} onclick={onclick} up={up} down={down} deleteItem={deleteStep}/>
        </div>
      </div>
    </div>

  )
}
