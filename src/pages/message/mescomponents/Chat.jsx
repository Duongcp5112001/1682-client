import React from 'react'
import MessData from './MessData'
import Input from './Input'
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfor">
        <span>Hoang DUong</span>

      </div>
      <MessData/>
      <Input/>
    </div>
  )
}

export default Chat