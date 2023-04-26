import React from 'react'
import MessNav from "./MessNav";
import Search from "./Search";
import Chats  from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MessNav/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar