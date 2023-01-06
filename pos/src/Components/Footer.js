import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/style.css'

const Footer = () => {
  return (
    <>

    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 Exacone, Inc</p>

        <NavLink to="/" className="logo"><img src="/assets/exac_logo.png" alt='' /></NavLink>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

        <div class="contact-icons">
              <a href="https://www.facebook.com/treyozz"><i class='bx bxl-facebook' ></i></a>
              <a href="https://www.instagram.com/sketchboyie/"><i class='bx bxl-instagram' ></i></a>
          </div>
        </ul>
      </footer>
    </div>

  </>
  )
}

export default Footer
