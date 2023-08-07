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

  const dialogs = DialogsData.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));

  const messages = MessageData.map((m) => <Message message={m.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogs}</div>
      <div className={styles.messageItems}>{messages}</div>
    </div>
  );
};

export default Dialogs;
