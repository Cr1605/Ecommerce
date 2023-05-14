import React from 'react'
import './footer.css'
import Logo from '../../assets/logo.png'
import {InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon} from '@heroicons/react/outline'


const Footer = () => {
  return (
    <div className='FooterWrapper'>
      <hr />
      <div className="Footer">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>Ecommerce</span>
        </div>
        <div className="block">
          <div className="detail">
            <span>Contact Us</span>
            <span className="pngLine">
              {/* <LocationMarkerIcon className='icon'/> */}
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
