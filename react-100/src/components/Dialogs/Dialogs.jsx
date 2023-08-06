import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};
const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <DialogItem id="1" name="Petr" />
        <DialogItem id="2" name="Ivan" />
        <DialogItem id="3" name="Volodya" />
        <DialogItem id="4" name="Maria" />
        <DialogItem id="5" name="Oleg" />
        <DialogItem id="6" name="Vasiliy" />
      </div>
      <div className={styles.messageItems}>
        <Message message="Hello" />
        <Message message="How are you?" />
        <Message message="I am fine" />
      </div>
    </div>
  );
};

export default Dialogs;
