import React from "react";
import AvatarPhoto from "../../images/profile-card/avatar-photo.jpg";
import AvatarVideo from "../../images/profile-card/bg-video.mp4";

const ProfileCard = () => {
  return (
    <div className="profile-card-wrapper">
      <div className="profile-card">
        <div className="box">
          <div className="img-bx">
            <video src={AvatarVideo} itemType="video/mp4" autoPlay loop muted />
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h2 className="content-title">
              Lola Banny
              <div className="content-description">Professional Artist</div>
            </h2>

            <ul className="content-info">
              <li>
                Posts<span>62</span>
              </li>
              <li>
                Folowers<span>120</span>
              </li>
              <li>
                Foloving<span>47</span>
              </li>
            </ul>
            <button className="content-following-button">Follow</button>
          </div>
        </div>
        <div className="circle">
          <div className="img-bx">
            <img src={AvatarPhoto} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
