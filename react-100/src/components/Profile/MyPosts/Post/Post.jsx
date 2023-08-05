import React from 'react';
import components from './Post.module.css';

const Post = (props) => {
  return (
    <div className={components.item}>
      <img
        src="https://img.freepik.com/vector-premium/avatar-chico-anime_24640-79424.jpg"
        alt="ava"
      />
      {props.message}
      <div className={components.like}>
        <span>Likes:{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
