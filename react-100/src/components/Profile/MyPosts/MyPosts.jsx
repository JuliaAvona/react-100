import React from 'react';
import components from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const postData = [
    { id: 1, message: 'Hello', likesCount: 12 },
    { id: 2, message: 'How are you?', likesCount: 4 },
    { id: 3, message: 'I am fine', likesCount: 10 },
  ];

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
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
        <Post
          message={postData[2].message}
          likesCount={postData[2].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
