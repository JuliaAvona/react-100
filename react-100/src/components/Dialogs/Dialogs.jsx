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
  const DialogsData = [
    { id: 1, name: 'Petr' },
    { id: 2, name: 'Ivan' },
    { id: 3, name: 'Volodya' },
    { id: 4, name: 'Maria' },
    { id: 5, name: 'Oleg' },
    { id: 6, name: 'Vasiliy' },
  ];

  const MessageData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I am fine' },
    { id: 4, message: 'You are welcome' },
    { id: 5, message: 'Hello world' },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <DialogItem id={DialogsData[0].id} name={DialogsData[0].name} />
        <DialogItem id={DialogsData[1].id} name={DialogsData[1].name} />
        <DialogItem id={DialogsData[2].id} name={DialogsData[2].name} />
        <DialogItem id={DialogsData[3].id} name={DialogsData[3].name} />
        <DialogItem id={DialogsData[4].id} name={DialogsData[4].name} />
        <DialogItem id={DialogsData[5].id} name={DialogsData[5].name} />
      </div>
      <div className={styles.messageItems}>
        <Message message={MessageData[0].message} />
        <Message message={MessageData[1].message} />
        <Message message={MessageData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
