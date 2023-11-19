import React from 'react'

export default function Row({
    keyProp = "[key]",
    value = "[key]",
    index = 0,
    setHeaderIndex = () => { }} ) {

    const click = () => {
        setHeaderIndex(index)
    }
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td><a href='#' onClick={click}>{keyProp}</a></td>
            <td><a href='#' onClick={click}>{value}</a></td>
            <td className='d-flex justify-content-around'>
                <a href='#' onClick={click}><i className="bi bi-pencil-square"></i></a>
                <a href='#' onClick={click} 
                data-bs-toggle="modal" data-bs-target="#deleteHeader"
                ><i className="bi bi-trash-fill"></i></a>
            </td>
        </tr>
    )
}
