import Post from "../post/Post";
import "./posts.scss";
import { useEffect, useState } from "react";
import Axios from "axios";

const Posts = (props) => {
  const [dataPosts, setDataPosts] = useState([]);

  const getPostDataHome = async () => {
    const response = await Axios.get(
      "https://mystic-network.herokuapp.com/api/member/get-posts",
    );
    setDataPosts(response.data.data)
  };

  const getPostDataProfile = async () => {
    const response = await Axios.post(
      "https://mystic-network.herokuapp.com/api/member/get-post-by-member-id",
      {
        memberId: "644533d7a49e66001432b5a4"
      }
    );
    setDataPosts(response.data.data)
  }

  useEffect(() => {
    if (props.namePage === "home") {
      console.log("home")
      getPostDataHome();
    } else if (props.namePage === "profile") {
      console.log("profile")
      getPostDataProfile();
    }
  }, []);

  return <div className="posts">
    {dataPosts.map(data=>(
      <Post postData={data} key={data.id} dataMember={props.dataMember}/>
    ))}
  </div>;
};

export default Posts;