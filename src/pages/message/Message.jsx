import React from 'react';
import "./message.scss";
import Sidebar from "./mescomponents/Sidebar"
import Chat from "./mescomponents/Chat"

const Message = () => {
    return (
        <div className="messageHome">
            <div className="container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}

export default Message