import React, { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import plusIcon from '../../assets/images/plus.png'
import Button from '../button'
import './style.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index';
import { Navigate } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'



export default function PortFolio() {
  const width = useWindowSize()
  const [hidebalance, setHidebalance] = React.useState(false)
  const [hidePassword, setHidePassword] = useState(false)

  const user = useSelector((state: RootState) => state.user.data)
  const handleHidePassword = () => {
    setHidePassword(!hidePassword)
  }
  if(!user?.name){
    Navigate({to:'/', replace:true})
  }
  return (
    <div className="portfolio">
      <div className="container">
        <div className="username">Welcome {user?.name}</div>
        <p className="small_text">
          Be on track for your journey to financial freedom 🎉
        </p>
        <div className="top_bar">
          <div className="top_bar_title">
            <div className="title">Total Savings</div>
            <div>{width < 768 ? user?.email?.slice(0, 5) : user?.email} </div>
          </div>
          <div className="balance_container">
            <span className="balance">{hidePassword ? '--:--' : user?.amount}</span>
            <span>
              {hidePassword ? (
                <BsEyeSlashFill onClick={handleHidePassword} />
              ) : (
                <BsEyeFill onClick={handleHidePassword} />
              )}
            </span>
          </div>
          <div className="portfolio_btns">
            <Button
              text="Deposit"
              colored={true}
              style={{ height: '24px', width: '62px', fontSize: '16px' }}
            />
            <Button
              text="Transfer"
              style={{ height: '24px', width: '62px', fontSize: '16px', color:'#1A5443' }}
            />
          </div>
        </div>
        <div className="investment_advise">
            <div className="invest_title">
                Investment advise for risk tolerance of {user?.riskScore}
            </div>
            <div className="advice_data">
                <div className="advice">
                    <div className='advice_name'>Duration</div>
                    <div className='advice_value'>{user?.duration}</div>
                </div>
                <div className="advice">
                    <div className='advice_name'>Savings plan type</div>
                    <div className='advice_value'>{user?.goal}</div>
                </div>
                <div className="advice">
                    <div className='advice_name'>Amount</div>
                    <div className='advice_value'>&#8358;{user?.amount}</div>
                </div>
            </div>
          </div>
          <div className="new_savings_plan">
          <Button text='Add a New Saving plan type' icon={plusIcon} style={{
             marginTop: "5rem",
             padding: "10px 16px",
             width: "234px",
             height: "40px",
             background: "#E5F1E6",
             borderRadius: "20px",
             fontWeight: 600,
             fontSize: "12px",
             color:'#1A5443'
          }}/>
          </div>
      </div>
    </div>
  )
}
