import React from "react";
import "./Profile.css";
import ProfileInfo from "../components/Profile/ProfileInfo";
import Weather from "../components/Weather/Weather";
import News from "../components/News/News";

function Profile() {
  return (
    <div className="profile__parent">
      <div className="pleft">
        <ProfileInfo />
        <Weather />
      </div>
      <div className="pright">
        <News />
      </div>
    </div>
  );
}

export default Profile;
