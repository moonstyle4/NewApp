import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>

            <div className={s.item}>
                <img src='http://n1s1.starhit.ru/a5/56/46/a55646098f3f0c041e868232ef2cff92/479x478_0_a85816425625ba00e6b2ee55d1c2c86d@479x478_0x0a330c9a_8487029821534524847.jpeg' />
                {props.message}
                <div><span>Like ({props.likeCount})</span></div>
            </div>
        </div>
    )
}
export default Post