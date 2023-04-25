import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  // State variables for user, group, and popular posts data
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [popularPostsWeek, setPopularPostsWeek] = useState([]);
  const [popularPostsMonth, setPopularPostsMonth] = useState([]);
  const [newAccounts, setNewAccounts] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    axios.get("/users").then((res) => setUsers(res.data));
    axios.get("/groups").then((res) => setGroups(res.data));
    axios
      .get("/posts/popular/week")
      .then((res) => setPopularPostsWeek(res.data));
    axios
      .get("/posts/popular/month")
      .then((res) => setPopularPostsMonth(res.data));
    axios.get("/accounts/new").then((res) => setNewAccounts(res.data));
  }, []);

  return (
    <div id="dashboard">
      {/* Display user data */}
      <h2>Total Users: {users.length}</h2>
      <input type="text" placeholder="Search Users" />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Display group data */}
      <h2>Total Groups: {groups.length}</h2>
      <input type="text" placeholder="Search Groups" />
      <ul>
        {groups.map((group) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>

      {/* Display popular posts for the week */}
      <h2>Popular Posts This Week:</h2>
      <ul>
        {popularPostsWeek.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {/* Display popular posts for the month */}
      <h2>Popular Posts This Month:</h2>
      <ul>
        {popularPostsMonth.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {/* Display new account data */}
      <h2>New Accounts This Month: {newAccounts.length}</h2>
    </div>
  );
};

export default Dashboard;
