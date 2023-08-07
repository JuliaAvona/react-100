import React from 'react';
import components from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const posts = [
    { id: 1, message: 'Hello', likesCount: 12 },
    { id: 2, message: 'How are you?', likesCount: 4 },
    { id: 3, message: 'I am fine', likesCount: 10 },
  ];

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
