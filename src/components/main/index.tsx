import React, { useState, useEffect } from 'react'
import Button from '../button'
import './style.scss'
import playIcon from '../../assets/images/play.png'
import groupIcon from '../../assets/images/group.png'
import starIcon from '../../assets/images/star.png'
import bgIcon from '../../assets/images/rectangle.png'
import { Rating } from '@mui/material'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import axios from 'axios'
import {useDispatch } from 'react-redux'
import { setUser } from '../../reducer'
import { useNavigate } from 'react-router-dom'
import { apiRoutes } from '../apiRoutes'


export default function Main() {
  const [value, setValue] = React.useState<number | null>(2)
  const [savingsPlan, setSavingsPlan] = useState('Saving goal')
  const [hidePassword, setHidePassword] = useState(false)
  const [isSubmited, setIsubmited] = useState(false)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const riskScore = Array.from(
    { length: 11 },
    (v: number, i: number) => (v = i++),
  )

  const handleHidePassword = () => {
    setHidePassword(!hidePassword)
  }

  const handleSavingsPlan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSavingsPlan(e.target.value as string)
  }
  const [duration, setDuration] = useState('Daily')

  const handleDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value as string)
  }
  const [risk, setRisk] = useState<number | null>(0)

  const handleRisk = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRisk((e.target.value as unknown) as number)
  }

  const initialState = {
    name: '',
    amount: '',
    email: '',
    password: '',
  }
  const [data, setData] = useState(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    setData({
      ...data,
      [name]: value,
    })
  }
  const handleSubmit = async () => {
    setIsubmited(true)
    setError(false)
    if (
      data.name &&
      duration &&
      savingsPlan &&
      data.amount &&
      risk &&
      data.email &&
      data.password
    ) {
      const request = {
        name: data.name,
        duration,
        riskScore: risk,
        goal: savingsPlan,
        amount: data.amount,
        password: data.password,
        email: data.email,
      }

     const url = apiRoutes.register;
      await axios
        .post(url, request)
        .then((res) =>{ 
          dispatch(setUser(res.data))
          navigate('/portfolio')
        })
        .catch((err) => console.log(err?.message))
    } else {
      setError(true)
      setIsubmited(false)
    }
  }

  return (
    <div className="main">
      <div className="main_left">
        <div className="main_title">
          Get the best automated financial services with no hassle...
        </div>
        <p className="main_text">
          Our Robo Advisor offers you an easy account setup, robust goal
          planning, diversified investing, account services and portfolio
          management. You can easily track your finance, all these and more
          makes it a better alternative to traditional advisory platform.
        </p>
        <div className="main_btns">
          <Button text="How it works" colored={true} icon={playIcon} />
          <Button text="Get Started" />
        </div>
        <div className="main_stat">
          <div className="main_stat_icon_container">
            <div className="img_container">
              <img src={groupIcon} alt="" />
            </div>
            <div className="main_stat_detail">
              <div className="desc">Trusted by millions of users</div>
              <div className="num">2,124,652</div>
            </div>
          </div>
          <div className="main_stat_icon_container">
            <div className="img_container">
              <img src={starIcon} alt="" />
            </div>
            <div className="main_stat_detail">
              <div className="desc">Over 81,834 reviews</div>
              <div className="rating">
                <Rating
                  name="simple-controlled"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                />
                <span>{value} Stars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="main_right"
        style={{
          backgroundImage: `url(${bgIcon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className="register_container">
          <div className="title">Get Automated Financial service</div>
          <TextField
            placeholder="Name"
            fullWidth
            name="name"
            onChange={handleChange}
            error={error}
          />
          <TextField
            type="text"
            label="Choose your savings plan type"
            select
            value={savingsPlan}
            onChange={handleSavingsPlan}
            fullWidth
            variant="outlined"
            error={error}
          >
            <MenuItem value="Simple funding">Simple funding</MenuItem>
            <MenuItem value="Saving goal">Saving goal</MenuItem>
            <MenuItem value="Recurring investment">
              Recurring investment
            </MenuItem>
          </TextField>
          <TextField
            type="text"
            label="How will you like to save?"
            select
            value={duration}
            onChange={handleDuration}
            fullWidth
            variant="outlined"
            error={error}
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </TextField>
          <TextField
            placeholder="Amount"
            name="amount"
            fullWidth
            onChange={handleChange}
            error={error}
          />
          <TextField
            type="text"
            label="Choose Risk tolerance"
            select
            value={risk}
            onChange={handleRisk}
            fullWidth
            variant="outlined"
            error={error}
          >
            {riskScore.map((v) => (
              <MenuItem value={v} key={v}>
                {v}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            placeholder="Email Address"
            fullWidth
            type="email"
            name="email"
            onChange={handleChange}
            error={error}
          />
          <TextField
            name="password"
            onChange={handleChange}
            placeholder="Set Password"
            fullWidth
            type={hidePassword ? 'text' : 'password'}
            error={error}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" style={{ cursor: 'pointer' }}>
                  {hidePassword ? (
                    <BsEyeSlashFill onClick={handleHidePassword} />
                  ) : (
                    <BsEyeFill onClick={handleHidePassword} />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <Button
            text="Submit"
            colored={true}
            onClick={handleSubmit}
            disabled={isSubmited}
          />
        </div>
      </div>
    </div>
  )
}
