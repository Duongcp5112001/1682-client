import Post from "../post/Post";
import "./posts.scss";
import { useEffect, useState } from "react";
import Axios from "axios";

const Posts = (props) => {
  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      const response = await Axios.get(
        "https://mystic-network.herokuapp.com/api/member/get-posts",
      );
      setDataPosts(response.data.data)
    }
    getPostData();
  }, []);

  return <div className="posts">
    {dataPosts.map(data=>(
      <Post postData={data} key={data.id} dataMember={props.dataMember}/>
    ))}
  </div>;
};

export default Posts;