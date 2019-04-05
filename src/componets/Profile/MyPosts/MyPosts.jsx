import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = (props) => {

    let postElements = props.posts.map(
        (p) => {
            return <Post message={p.message} likeCount={p.likeCount} />
        }
    );
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts