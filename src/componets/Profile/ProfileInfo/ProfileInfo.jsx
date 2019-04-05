import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <img src="https://www.ctctourism.com/image/catalog/BBB/AAA/IMG21.jpg" />
      <div className = {s.descriptionBlock}>
        Ava + description
        </div>
    </div>
  )
}
export default ProfileInfo