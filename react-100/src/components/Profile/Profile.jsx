import React from 'react';
import components from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={components.content}>
      <div>
        <img
          className={components.img}
          src="https://wallpaperaccess.com/full/9059693.png"
          alt="logo"
        />
      </div>
      <div>ava + description</div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
