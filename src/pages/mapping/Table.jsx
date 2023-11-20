import React from 'react'
import Select from './Select'

export default function Table({ mapping, onClick, doleteItem }) {
    const click = (index) => {
        onClick(index);
    }
    const del = (index) => {
        doleteItem(index);
    }
    const list = mapping.params.expressions;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Source</th>
                    <th scope="col">Target</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                            <a href="#" onClick={() => click(index)}>
                                {item.source}
                            </a>
                        </td>
                        <td>
                            <a href="#" onClick={() => click(index)}>
                                {item.target}
                            </a>
                        </td>
                        <td className="d-flex justify-content-around">
                            <a href="#" onClick={() => click(index)}>
                                <i className="bi bi-pencil-square" />
                            </a>
                            <a href="#" onClick={() => del(index)}>
                                <i className="bi bi-x-circle-fill" />
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
