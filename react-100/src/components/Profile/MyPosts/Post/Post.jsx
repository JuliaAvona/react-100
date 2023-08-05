import React from 'react';
import components from './Post.module.css';

const Post = (props) => {
  return (
    <div className={components.item}>
      <img
        src="https://img.freepik.com/vector-premium/avatar-chico-anime_24640-79424.jpg"
        alt="ava"
      />
      {props.message};
      <div>
        <img
          className={components.like}
          src="https://static.vecteezy.com/system/resources/previews/002/075/207/original/like-and-love-icon-6-free-vector.jpg"
          alt="like"
        />
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
