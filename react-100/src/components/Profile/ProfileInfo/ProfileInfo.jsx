import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.img}
          src="https://images2.alphacoders.com/844/thumb-1920-844803.jpg"
          alt="logo"
        />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
