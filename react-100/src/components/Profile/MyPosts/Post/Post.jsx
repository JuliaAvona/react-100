import React from 'react';
import components from './Post.module.css';

const Post = () => {
  return (
    <div className={components.item}>
      <img
        src="https://img.freepik.com/vector-premium/avatar-chico-anime_24640-79424.jpg"
        alt="ava"
      />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
