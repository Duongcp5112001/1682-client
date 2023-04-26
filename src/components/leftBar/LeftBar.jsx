import "./leftBar.scss";
import Ads from "../../assets/ads.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";

const LeftBar = (props) => {
  const token = Cookies.get('token');
  const [dataMember, setDataMember] = useState({});
  const [dataGroup, setDataGroup] = useState([])

  const getGroupId = async () => {
    await Axios.get(
      "https://mystic-network.herokuapp.com/api/member/get-group-list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      getGroupData(response.data.data.data);
    })
  };

  const getGroupData = async (array) => {
    const groupIds = array.map(data => data.groupId);

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
    
    const promises = groupIds.map((groupId) => axiosInstance.post('/get-group-by-id', { groupId: groupId }));
    const responses = await Promise.all(promises);
    const data = responses.map(response => response.data);
    const dataFinal = data.map(data => data.group)
    setDataGroup(dataFinal);
    console.log("groups: " + dataFinal);
  };

  useEffect(() => {
    setDataMember(props.dataMember);
    getGroupId();
  }, []);
//
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Link
              to={`/profile/${dataMember._id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img src={dataMember.avatar} alt="" />
              <span>{dataMember.username}</span>
            </Link>
          </div>
        </div>
        <hr />
        {dataGroup !== [] ? (
          <div className="menu">
            <span>Group</span>
            {(() => {
              const items = [];
              for (let i = 0; i < dataGroup.length; i++) {
                const data = dataGroup[i];
                items.push(
                  <div className="item" key={data._id}>
                    <img 
                      src={data.avatar} 
                      alt="" 
                    />
                    <span>{data.name}</span>
                  </div>
                );
              }
              return items;
            })()}
          <hr />
          </div>
        ) : (
          <div></div>
        )}
        <div className="menu">
          <span>Adsversment</span>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads </span>
          </div>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads</span>
          </div>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads</span>
          </div>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads</span>
          </div>
          <div className="item">
            <img src={Ads} alt="" />
            <span>Ads</span>
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default LeftBar;
