import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  const newPostElement = React.createRef();

  const createPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={createPost}>Add post</button>
        </div>
      </div>
      <div className={() => console.log('hello')}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
