import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import PostMenu from "../PostMenu";
import Axios from "axios";
import Cookies from "js-cookie";

const Post = (props) => {
  const [commentOpen, setCommentOpen] = useState(false); 
  const [postData, setPostData] = useState([]); 
  const [dataMember, setDataMember] = useState({}); 
  const [dataPostsOwner, setDataPostsOwner] = useState({});
  const token = Cookies.get('token');
  const liked = false;

  const getMemberByPosts = async () => {
    const response = await Axios.post(
      "https://mystic-network.herokuapp.com/api/member/get-member-by-id",
      {
        memberId: props.postData.updatedBy
      }
    )
    setDataPostsOwner(response.data.member);
  };

  useEffect(() => {
    setPostData(props.postData);
    setDataMember(props.dataMember);
    getMemberByPosts();    
  }, [props.postData]);

  const lengthLike = props.postData.like.length;
  const lengthDislike = props.postData.dislike.length;
  const lengthCmt = props.postData.comments.length;
  const dataCmt = postData.comments;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={dataPostsOwner.avatar} alt="" />
            <div className="details">
              <Link
                to={`/profile/${dataPostsOwner._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{dataPostsOwner.username}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
        <PostMenu icon/>
        </div>
        <div className="content">
          <p>{postData.description}</p>
          <img src={postData.image} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {lengthLike} Likes
          </div>
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {lengthDislike} Dislikes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {lengthCmt} Comments
          </div>
        </div>
        {commentOpen && <Comments dataMember={dataMember} dataCmt={dataCmt}/>}
      </div>
    </div>
  );
};

export default Post;