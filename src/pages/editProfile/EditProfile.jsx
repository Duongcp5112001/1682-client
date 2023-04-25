import React, { useState } from "react";
import updateProfile from "./UpdateProfile";
import "./editprofile.scss";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleProfilePicUpload = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const handleCoverPhotoUpload = (event) => {
    setCoverPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProfile(name, profilePic, coverPhoto, oldPassword, newPassword);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="user-container">
      <div className="container">
      <h1>Edit Profile</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="profilePic">Profile Picture:</label>
        <input
          type="file"
          id="profilePic"
          accept="image/*"
          onChange={handleProfilePicUpload}
        />
        <br />
        <br />
        <label htmlFor="coverPhoto">Cover Photo:</label>
        <input
          type="file"
          id="coverPhoto"
          accept="image/*"
          onChange={handleCoverPhotoUpload}
        />
        <br />
        <br />
        <label htmlFor="oldPassword">Old Password:</label>
        <input
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
          
        />
        <br />
        <br />
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Save Changes</button>
      </form>

      </div>
    </div>
  );
}
export default EditProfile;