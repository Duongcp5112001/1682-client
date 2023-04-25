import { AttachFile, Photo } from '@mui/icons-material'
import React from 'react'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Type your message...' />
      <div className="send">
        <img src={AttachFile} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={Photo} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input