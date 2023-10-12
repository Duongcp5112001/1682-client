import "./share.scss";
import ImagePost from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";
import { storage } from "../../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Share = (props) => {
  const token = Cookies.get("token");
  const [dataMember, setDataMember] = useState({});
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  };

  const handleChangeImage = (e) => {
    if(e.target.files[0] === null) return;
    const imageRef = ref(storage, `images/${e.target.files[0].name + v4()}`);
    uploadBytes(imageRef, e.target.files[0]).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setImageUrl(url)
      })
    })
  };

  const createPost = async () => {
    const response = await Axios.post(
      "https://mystery-social-7f4a4cc480b5.herokuapp.com/api/member/create-posts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        description: description,
        image: imageUrl
      },
    )
  }

  useEffect(() => {
    setDataMember(props.dataMember);
  }, []);
  
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={dataMember.avatar}
            alt=""
          />
          <input type="text" placeholder={`How your feel today?`} onChange={handleChangeDescription}/>
        </div>
        <img 
          src={imageUrl} 
          style={{width:"100%"}}
        />
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} onChange={handleChangeImage}/>
            {/*  */}
            <label htmlFor="file">
              <div className="item">
                <img src={ImagePost} alt="" />
                <span>Photo</span>
              </div>
            </label>
          </div>
          <div className="right">
            <button onClick={createPost}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;