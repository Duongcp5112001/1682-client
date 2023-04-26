import "./rightBar.scss";
import Axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const RightBar = (props) => {
  const token = Cookies.get('token');
  const [dataFriend, setFriendGroup] = useState([]);

  const getFriendId = async () => {
    const response = await Axios.get(
      "https://mystic-network.herokuapp.com/api/member/get-friend-list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    getFriendData(response.data.data.data);
  };

  const getFriendData = async (array) => {
    const friendIds = array.map(data => data.friendId);

    const axiosInstance = Axios.create({
      baseURL: 'https://mystic-network.herokuapp.com/api/member',
    });
    
    axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    
    const promises = friendIds.map((memberId) => axiosInstance.post('/get-member-by-id', { memberId: memberId }));
    const responses = await Promise.all(promises);
    const data = responses.map(response => response.data);
    const dataFinal = data.map(data => data.member)
    setFriendGroup(dataFinal);
  };

  useEffect(() => {
    getFriendId();
  }, []);
//
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/OIP.EF_rH_CGlInjFiT_D71OjAAAAA?pid=ImgDet&rs=1"
                alt=""
              />
              <span>DuongD</span>
            </div>
            <div className="buttons">
              <button>Request</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/OIP.EF_rH_CGlInjFiT_D71OjAAAAA?pid=ImgDet&rs=1"
                alt=""
              />
              <span>DuongD</span>
            </div>
            <div className="buttons">
              <button>Request</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online</span>
            {(() => {
              const items = [];
              for (let i = 0; i < dataFriend.length; i++) {
                const data = dataFriend[i];
                items.push(
                  <div className="user" key={data._id}>
                    <div className="userInfo">
                      <Link
                        to={`/profile/${data._id}`}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={data.avatar}
                          alt=""
                        />
                        <div className="online" />
                        <span>{data.username}</span>
                    </Link>
                    </div>
                  </div>
                );
              }
              return items;
            })()}
        </div>
      </div>
    </div>
  );
};

export default RightBar;