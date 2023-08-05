import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <div>
          <a href="/profile" className={styles.item}>
            Profile
          </a>
        </div>
        <div>
          <a href="/messages" className={styles.item}>
            Messages
          </a>
        </div>
        <div>
          <a href="/news" className={styles.item}>
            News
          </a>
        </div>
        <div>
          <a href="/music" className={styles.item}>
            Music
          </a>
        </div>
        <div>
          <a href="/settings" className={styles.item}>
            Settings
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
