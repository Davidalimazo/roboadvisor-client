import './style.scss'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '../button'
import { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import clsx from 'classnames';
import { useLocation } from 'react-router-dom'

export const MobileMenu = () => {
  const [isMobile, setIsMobile] = useState(false)
  const handleMobileClick = () => {
    setIsMobile(!isMobile)
  }
  const mobileClose = clsx("links", {
    closeLinks:isMobile
  })

  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className="mobile_menu">
      <div className="top">
        <div className="logo">Robonytics</div>
        <div className="close">
          {isMobile ? (
            <AiOutlineMenu onClick={handleMobileClick} />
          ) : (
            <FaTimes onClick={handleMobileClick} />
          )}
        </div>
      </div>
      <div className={mobileClose}>
        <Link to='/' className={url === "/" ? "underline_active" : ""}>Home</Link>
        <Link to='/#' className={url === "/about" ? "underline_active" : ""}>About us</Link>
        <Link to='/#' className={url === "/services" ? "underline_active" : ""}>Services</Link>
        <Link to='/#' className={url === "/support" ? "underline_active" : ""}>Support</Link>
        <div className="btn">
        <Button text="Create Account" />
      </div>
      </div>
    </div>
  )
}
