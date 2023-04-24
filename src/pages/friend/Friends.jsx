import "./friends.scss";
import React, { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "Bui Duc Lan" },
    { id: 2, name: "Nguyen Hoang Duong cute" },
    { id: 3, name: "Nguyen Hoang Duong ngu" },
    { id: 4, name: "Nguyen Van Huy" },
    { id: 5, name: "Ha Anh Phuong" },
]);

const [searchText, setSearchText] = useState("");

const handleSearch = (event) => {
setSearchText(event.target.value);
};

const filteredFriends = friends.filter((friend) =>
friend.name.toLowerCase().includes(searchText.toLowerCase())
);

return (
{/* <div className="friends-container">
    <h1 className="friends-header">My Friends</h1>
    <div className="friends-search-container">
    <p className="friends-count">All Friends {friends.length}</p>
    <input
        className="friends-search-input"
        type="text"
        onChange={handleSearch}
        value={searchText}
        placeholder="Search friends"
    />
    </div>
    <ul className="friends-list">
    {filteredFriends.map((friend) => (
        <li className="friends-item" key={friend.id}>        
        <a href={`/profile/${friend.id}`}>{friend.name}</a>
        </li>
    ))}
    </ul>
</div> */}
);
};

export default Friends;
