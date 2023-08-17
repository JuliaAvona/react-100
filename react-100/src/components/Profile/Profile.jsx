import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <div>
        <MyPosts posts={props.state.posts} addPost={props.addPost} />
      </div>
    </div>
  );
};

export default Profile;
