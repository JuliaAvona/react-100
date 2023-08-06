import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <div className={styles.dialog + ' ' + styles.active}>Ivan</div>
        <div className={styles.dialog}>Petr</div>
        <div className={styles.dialog}>Maria</div>
        <div className={styles.dialog}>Karl</div>
        <div className={styles.dialog}>Mark</div>
        <div className={styles.dialog}>Zar</div>
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
