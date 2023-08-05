import React from 'react';
import components from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={components.content}>
      <div>
        <img
          className={components.img}
          src="https://images2.alphacoders.com/844/thumb-1920-844803.jpg"
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
