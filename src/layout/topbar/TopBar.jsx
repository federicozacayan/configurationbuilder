import React from 'react'
import SideBar from '../sidebar/SideBar'


export default function TopBar() {
  return (
    <div className="container-fluid ">
        <a className="navbar-brand" href="#">One Digital Mapper (Front End)</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <SideBar />
      </div>
  )
}
