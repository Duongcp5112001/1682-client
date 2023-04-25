import "./rightBar.scss";
import Axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const RightBar = (props) => {
  const token = Cookies.get('token');
  const [dataMember, setDataMember] = useState({}); 
  const [dataFriendMemberId, setDataFriendMemberId] = useState([]);
  const [dataFriend, setFriendGroup] = useState([])
//
  const getFriendId = async () => {
    await Axios.get(
      "https://mystic-network.herokuapp.com/api/member/get-friend-list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      setDataFriendMemberId(response.data.data.data)
    })
    getFriendData();
  };

  const getFriendData = async () => {
    const friendIds = dataFriendMemberId.map(data => data.friendId);

    const axiosInstance = Axios.create({
      baseURL: 'https://mystic-network.herokuapp.com/api/member',
    });
    
    axiosInstance.interceptors.request.use(
      (config) => {
        const token = Cookies.get('token');
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
//
  useEffect(() => {
    setDataMember(props.dataMember);
    getFriendId();
  }, []);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/327354403_5065035306932478_3001752581867408486_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5uUua2EwcGcAX8TkQ3M&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDInqylKDZ5lozNd1MA2n1Nzru2lKzpuqW3_Unu_Y1f8A&oe=6446EB03"
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
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/327354403_5065035306932478_3001752581867408486_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5uUua2EwcGcAX8TkQ3M&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDInqylKDZ5lozNd1MA2n1Nzru2lKzpuqW3_Unu_Y1f8A&oe=6446EB03"
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
                  <div className="user">
                    <div className="userInfo" key={data._id}>
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