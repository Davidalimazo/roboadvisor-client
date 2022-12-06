import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import './style.scss'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className='notfound'>
      <div>404</div>
      <p>Oops! that page was not found :)</p>
        <Button text='Go back to home' colored={true} onClick={()=>navigate('/')}/>
    </div>
  );
}
