import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
import {MobileMenu } from '../mobilemenu';
import Button from '../button';
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className='navbar'>
      <div className="left">Robonytics</div>
      <div className="right">
        <div className="links">
        <Link to='/' className={url === "/" ? "underline_active" : ""}>Home</Link>
        <Link to='/#' className={url === "/about" ? "underline_active" : ""}>About us</Link>
        <Link to='/#' className={url === "/services" ? "underline_active" : ""}>Services</Link>
        <Link to='/#' className={url === "/support" ? "underline_active" : ""}>Support</Link>
        </div>
       <div className="btn">
        <Button text='Create Account'/>
       </div>
      </div>
      <MobileMenu/>
    </div>
  );
}
