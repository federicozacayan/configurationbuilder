import React from 'react'
import { mapping as dummyMapping, mappingList as dummyMappingList } from '../../tools/DummyData';
import useLocalStorage from '../../tools/UseLocalStorage';

export default function SelectMapping({ onChange, value }) {
    const [mappingList, setMappingList] = useLocalStorage('mappingList', dummyMappingList);
    const change = (e) => {
        onChange(e);
    }
    return (
        <select className="form-select" aria-label="Default select example"
        onChange={change} defaultValue={value}
        >
            <option value={""}>--SELECT A MAPPING--</option>
            {mappingList.map((mapping, index) => (
                <option key={index} value={mapping.name}>{mapping.name}</option>
            ))}
        </select>
    )
}
