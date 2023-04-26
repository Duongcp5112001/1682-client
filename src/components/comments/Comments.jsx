import { useEffect, useState } from "react";
import "./comments.scss";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

const Comments = ( props ) => {
  const token = Cookies.get("token");

  const [dataMember, setDataMember] = useState({});
  const [dataComments, setDataComments] = useState([]);
  
  const getIdMemberCmted = (array) => {
    const ids = array.map(data => data.createdBy)
  }

  useEffect(() => {
    setDataMember(props.dataMember);
    setDataComments(props.dataCmt);
    getIdMemberCmted(props.dataCmt)
  }, []);
  
  return (
    <div className="comments">
      <div className="write">
        <img src={dataMember.avatar} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {dataComments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.content}</p>
          </div>
          <span className="date">42 secs ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;