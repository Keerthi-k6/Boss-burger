import { color } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ({message,linkRoute,linkText}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
     <h2 style={{textAlign: 'center' , paddingTop: '2rem'}}>{message}</h2> 
     <Link to={linkRoute} className={'button'} style={{marginTop: '1rem'}} >{linkText}</Link>
    </div>
  )
}

NotFound.defaultProps = {
  message:'Nothing found. Please try again!',
  linkRoute: '/',
  linkText: 'Go Back to HomePage'
}
export default NotFound
