import React from 'react';
import components from './MyPosts.module.css';
import Post from './Post/Post';
import posts from '../../../data/posts';

const MyPosts = () => {
  const postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div className={components.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
