import React from 'react'
import Row from './Row'
import eventBus from '../../tools/EventBus'
import pages from '../Pages'

export default function Table({ headers, setHeaderIndex }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Key</th>
                    <th scope="col">Value</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {headers.map((header, i) => <Row key={i} keyProp={header.key} 
                    value={header.value} 
                    index={i} 
                    setHeaderIndex={setHeaderIndex}
                    />)}
            </tbody>
        </table>
    )
}
