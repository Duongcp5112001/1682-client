import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import PostMenu from "../PostMenu";

const Post = (props) => {
  const [commentOpen, setCommentOpen] = useState(false); 
  const [postData, setPostData] = useState({}); 
  const [dataMember, setDataMember] = useState({}); 
  const liked = false;

  useEffect(() => {
    setPostData(props.post);
    setDataMember(props.dataMember);
  }, []);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={postData.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${postData.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{postData.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
        <PostMenu icon/>
        </div>
        <div className="content">
          <p>{postData.desc}</p>
          <img src={postData.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            2 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments dataMember={dataMember} />}
      </div>
    </div>
  );
};

export default Post;