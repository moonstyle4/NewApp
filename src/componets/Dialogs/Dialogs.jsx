import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let dialogsData = [
  { id: 1, name: 'Kolyan' },
  { id: 2, name: 'Alyona' },
  { id: 3, name: 'Vlad' },
  { id: 4, name: 'Dima' }
]
let messageData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are u?' },
  { id: 3, message: 'Not bad' },
  { id: 4, message: 'And u?' }
]
let dialogItems = dialogsData.map(
  (d) => {
    return <DialogItem id={d.id} name={d.name} />
  }
);
let messageItems = messageData.map(
  (m) => {
    return <Message message={m.message} />
  }
);

const Dialog = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogItems}
      </div>
      <div className={s.messages}>
        {messageItems}
      </div>
    </div>
  )
}
export default Dialog