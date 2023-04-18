import React from "react";
import "./Profile.css";
import ProfileInfo from "../components/Profile/ProfileInfo";
import Weather from "../components/Weather/Weather";
import News from "../components/News/News";
import Notes from "../components/Notes/Notes";
import Timer from "../components/Timer/Timer";

function Profile() {
  return (
    <div className="profile__parent">
      <div className="pleft">
        <div className="pleft__top">
          <div className="pleft__left">
            <ProfileInfo />
            <Weather />
          </div>
          <div className="pleft__right">
            <Notes />
          </div>
        </div>
        <div className="pleft__bottom">
          <Timer />
        </div>
      </div>
      <div className="pright">
        <News />
      </div>
    </div>
  );
}

export default Profile;
