import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogs = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));
  const messages = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  const newMessage = React.createRef();
  const sendNewMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogs}</div>
      <div className={styles.messageItems}>{messages}</div>
      <button className={styles.button} onClick={sendNewMessage}>
        Send Message
      </button>
      <textarea
        className={styles.textarea}
        ref={newMessage}
        name=""
        id=""
        cols="100"
        rows="30"
      ></textarea>
    </div>
  );
};

export default Dialogs;
