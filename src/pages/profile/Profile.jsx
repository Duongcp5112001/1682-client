import "./profile.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*"
          alt=""
          className="cover"
        />
        <img
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/277109173_1887746408083196_2354229315891508890_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=exxqwW37rn4AX_R7dd7&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAeEkLcAW3LgunJ1zra86ziOKRaDDUdSFqCXBpF3ZZBTg&oe=644759F8"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
           
          </div>
          <div className="center">
            <span>AnhPhuong1</span>
            <div className="info">
              
            </div>
            <button>Add Friend</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon /> 
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;