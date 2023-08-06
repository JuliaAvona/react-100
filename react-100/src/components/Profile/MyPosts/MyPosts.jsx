import React from 'react';
import components from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={components.posts}>
        <Post message={'first post'} likesCount={12} />
        <Post message={'second post'} likesCount={4} />
        <Post message={'third post'} likesCount={10} />
      </div>
    </div>
  );
};

export default MyPosts;
