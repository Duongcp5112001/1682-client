import React from 'react'
import "./adminleft.scss"


const AdminLeft = () => {
  return (
    <div className="adminLeft">
        <div className="container">
            <div className="adminItem">
                <div className="items">
                    <img src="" alt="" />
                    <span>Dash Board</span>
                </div>
                <hr/>
                <div className="items">
                    <img src="" alt="" />
                    <span>Manage User</span>
                </div>
                <hr/>
                <div className="items">
                    <img src="" alt="" />
                    <span>Manage Post</span>
                </div>
                <hr/>
                <div className="items">
                    <img src="" alt="" />
                    <span>Manage Feedback</span>
                </div>
                <hr/>
                <div className="items">
                    <img src="" alt="" />
                    <span>Manage Ads</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AdminLeft