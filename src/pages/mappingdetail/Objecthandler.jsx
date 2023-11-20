import React from 'react'
import StepTypeSelector from '../steps/StepTypeSelector'
import ObjectSelector from './ObjectSelector'

export default function Objecthandler({sourceTypeIn, sourceValueIn, changeSourceType, changeSourceName, typeLabel, nameLabel}) {
    const [sourceType, setSourceType] = React.useState(sourceTypeIn);
    const [sourceName, setSourceName] = React.useState(sourceValueIn);
    const changeName = (e) => {
        setSourceName(e.target.value);
        changeSourceName(e.target.value);
    }
    const changeType = (e) => {
        setSourceType(e.target.value);
        changeSourceType(e.target.value);
    }
    return (
        <div className="col-6">
            <StepTypeSelector onChange={changeType} value={sourceTypeIn} typeSelectorLabel={typeLabel||"Object Source Type"} />
            <ObjectSelector objectType={sourceType} objectName={sourceName} changeSource={changeName} label={nameLabel||"Object source"} />
        </div>
    )
}
