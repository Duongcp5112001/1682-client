import { useContext, useEffect, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

const Comments = ( props ) => {
  const token = Cookies.get("token");

  const [dataMember, setDataMember] = useState({});

  useEffect(() => {
    setDataMember(props.dataMember);
  }, []);
  
  const comments = [
    {
      id: 1,
      desc: "Quá tuyệt vời",
      name: "DuongD",
      userId: 1,
      profilePicture:
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/327354403_5065035306932478_3001752581867408486_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5uUua2EwcGcAX8TkQ3M&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDInqylKDZ5lozNd1MA2n1Nzru2lKzpuqW3_Unu_Y1f8A&oe=6446EB03",
    },
    {
      id: 2,
      desc: "Xuất Sắc",
      name: "AnhPhuong1",
      userId: 2,
      profilePicture:
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/277109173_1887746408083196_2354229315891508890_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=exxqwW37rn4AX_R7dd7&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAeEkLcAW3LgunJ1zra86ziOKRaDDUdSFqCXBpF3ZZBTg&oe=644759F8",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={dataMember.avatar} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">42 secs ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;