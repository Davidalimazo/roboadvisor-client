import React, { useState } from 'react'
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
import { useFormik } from 'formik'
import { registerSchema } from '../../schema/registerSchema'
import ErrorDisplay from '../helper'



export default function Main() {
  const [value, setValue] = React.useState<number | null>(5)
  const [hidePassword, setHidePassword] = useState(false)
  const [isSubmited, setIsubmited] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const riskScore = Array.from(
    { length: 11 },
    (v: number, i: number) => (v = i++),
  )

  const onSubmit = async () => {
   
    console.log('clicked')
    setIsubmited(true)

     const url = apiRoutes.register;
      await axios
        .post(url, values)
        .then((res) =>{ 
          dispatch(setUser(res.data))
          navigate('/portfolio')
        })
        .catch((err) =>{ 
          setIsubmited(false)
          setError(err?.message)
          console.log(err?.message)})
  }

  const {
    values,
    errors,
    handleBlur,
    handleChange:formikHandleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name:"",
        duration:"",
        riskScore: 0,
        goal: "",
        amount: "",
        password: "",
        email: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });


  const handleHidePassword = () => {
    setHidePassword(!hidePassword)
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
          <form onSubmit={handleSubmit}>
          <div className="title">Get Automated Financial service</div>
          <TextField
            placeholder="Name"
            fullWidth
            name="name"
            value={values.name}
            onBlur={handleBlur}
            helperText={<ErrorDisplay string={errors.name}/>}
            onChange={formikHandleChange}
            error={errors.name?.length === 0}
          />
          <TextField
            type="text"
            label="Choose your savings plan type"
            select
            name='goal'
            value={errors.goal}
            helperText={<ErrorDisplay string={errors.goal}/>}
            onBlur={handleBlur}
            onChange={formikHandleChange}
            error={errors.goal === ''}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Simple funding">Simple funding</MenuItem>
            <MenuItem value="Saving goal">Saving goal</MenuItem>
            <MenuItem value="Recurring investment">
              Recurring investment
            </MenuItem>
          </TextField>
          <TextField
            type="text"
            helperText={<ErrorDisplay string={errors.duration}/>}
            label="How will you like to save?"
            select
            name='duration'
            value={values.duration}
            onBlur={handleBlur}
            onChange={formikHandleChange}
            error={errors.duration === ''}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </TextField>
          <TextField
            placeholder="Amount"
            name="amount"
            fullWidth
            helperText={<ErrorDisplay string={errors.amount}/>}
            value={values.amount}
            onBlur={handleBlur}
            onChange={formikHandleChange}
            error={errors.amount === ''}
          />
          <TextField
            type="text"
            label="Choose Risk tolerance"
            select
            name='riskScore'
            helperText={<ErrorDisplay string={errors.riskScore}/>}
            value={values.riskScore}
            onBlur={handleBlur}
            onChange={formikHandleChange}
            error={errors.riskScore === null}
            fullWidth
            variant="outlined"
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
            type="text" 
            helperText={<ErrorDisplay string={errors.email}/>}
            name='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={formikHandleChange}
            error={errors.email === ''}
          />
          <TextField
            name="password"
            helperText={<ErrorDisplay string={errors.password}/>}
            value={values.password}
            onBlur={handleBlur}
            onChange={formikHandleChange}
            error={errors.password === ''}
            placeholder="Set Password"
            fullWidth
            type={hidePassword ? 'text' : 'password'}
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
            text="submit"
            colored={true}
            disabled={isSubmited}
          />
          {
            error.length > 0 && (<div>error</div>)
          }
          </form>
        </div>
      </div>
    </div>
  )
}
