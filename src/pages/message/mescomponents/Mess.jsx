import { Avatar } from '@mui/material'
import React from 'react'

const Mess = () => {
  return (
    <div className="mess owner">
      <div className="messInfor">
        <img src={Avatar} alt="" />
        <span>now</span>
      </div>
      <div className="messContent">
        <p>hello</p>
        {/* <img src={Avatar} alt="" /> */}
      </div>
    </div>
  )
}

export default Mess