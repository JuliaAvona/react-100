import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to="/messages/1">Ivan</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/messages/2">Petr</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/messages/3">Maria</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/messages/4">Karl</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/messages/5">Mark</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/messages/6">Alex</NavLink>
        </div>
      </div>
      <div className={styles.messageItems}>
        <div className={styles.message}>Hello</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>I am fine</div>
      </div>
    </div>
  );
};

export default Dialogs;
