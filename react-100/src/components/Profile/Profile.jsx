import React from 'react';
import components from './Profile.module.css';

const Profile = () => {
  return (
    <div className={components.content}>
      <div>
        <img
          className={components.img}
          src="https://wallpaperaccess.com/full/9059693.png"
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={components.posts}>
          <div className={components.item}>post 1</div>
          <div className={components.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
