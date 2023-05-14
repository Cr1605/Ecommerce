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
              <LocationMarkerIcon className='icon'/>
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className="pngLine">
              <PhoneIcon className='icon'/>
              <a href="tel:352-306-4415">352-306-4415</a>
            </span>
            <span className="pngLine">
              <InboxIcon className='icon'/>
              <a href="mailto:thha.19it@gmail.com">thha.19it@gmail.com</a>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Account</span>
            <span className="pngLine">
              <LoginIcon className='icon'/>
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Company</span>
            <span className="pngLine">
              <UsersIcon className='icon'/>
              <span>About us</span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Resources</span>
            <span className="pngLine">
              <LinkIcon className='icon'/>
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className="copyRight">
        <span>Copyright ©2022 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer
