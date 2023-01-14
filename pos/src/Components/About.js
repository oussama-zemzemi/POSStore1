import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h1>About Us</h1>
          <p className="lead mb-4">
            Welcome to exacone Tunisian Ltd
            We are one of the Tunisian's
            Premium E-liquid Manufacturers
            All of our e-liquids are mixed in an ISO7 cleanroom.
            Our premium liquids in 10ml bottles are all
            pre-steeped and ready to go.
            We have fruit flavours, tobacco flavours, menthol and
            mint flavours...
            We cater for all vapers!
            We have been trading online since 2011. We also have a
            shop inside our
            warehouse which stocks all of the
            latest devices and tanks. Our experienced staff can direct
            you to the right
            path which suits your vaping style.
            We wholesale our liquids so if you would like any information
            on becoming a
            Vape-it tunisan authorised
            Reseller please contact us via telephone on 00216 94 546 118 or
            email us at sales@vape-it.co.tn
            A varied choice is very important, as everybody is different and
            we recognise this. If you are not
            sure which device is right for you or have any other questions,
            please contact us for guidance - it's free!
            Vape-it Tunisia Ltd is Tunisia based we are here to give friendly
            and helpful advice to assist
            you on your way to the vaping lifestyle.
          </p>
          <NavLink to="/contact" className="btn
         btn-dark px-3"> Contact Us</NavLink>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
