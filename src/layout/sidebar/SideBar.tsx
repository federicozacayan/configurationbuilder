import React, { useState } from 'react'
import Acordion from '../acordion/Acordion'
import eventBus from '../../tools/EventBus'
import pages from '../../pages/Pages'




export default function SideBar() {
    const [active, setActive] = useState(0)
    const goto = (page, e, index) => {
        e.preventDefault()
        eventBus.dispatch('goto', page)
        setActive(index)
    }

    return (
        <div className="offcanvas offcanvas-end  bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-light" id="offcanvasDarkNavbarLabel">Menu</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body bg-dark">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {/* {Object.keys(pages).map((key, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <a className={(active == index) ? "nav-link active" : "nav-link"} href="#" onClick={(e) => goto(pages[key], e, index)}>{key}</a>
                            </li>
                        )
                    })} */}
                    {/* 
                    <li className="nav-item">
                        <a className="nav-link active" href="#" onClick={(e) => goto(pages.request, e)}>Request</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={(e) => goto(pages.header, e)}>Headers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={(e) => goto(pages.mapping, e)}>Mapping</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={(e) => goto(pages.mapping, e)}>Body</a>
                    </li> */}

                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Dummy</a>
                    </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mapping
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            {Object.keys(pages).map((key, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <a className="dropdown-item" href="#" onClick={(e) => goto(pages[key], e, index)}>{key}</a>
                                    </li>
                                )
                            })}
                            {/* <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                        </ul>
                    </li>

                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Dummy</a>
                    </li> */}
                </ul>


                {/* <form className="d-flex mt-3 mb-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form> */}


                {/* <Acordion /> */}
            </div>
        </div>
    )
}
