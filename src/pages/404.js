import React from 'react'
import { Images } from '../assets'
import './style.scss'
const ErrorHandling = () => {
  return (
    <div className="container-not-found">
      <img src={Images.Not_Founds} alt="not_founds" className="not-found__images"/>
    </div>
  )
}

export default ErrorHandling
