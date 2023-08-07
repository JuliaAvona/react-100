import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageData from '../../data/messages';
import DialogsData from '../../data/dialogs';

const Dialogs = (props) => {
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
