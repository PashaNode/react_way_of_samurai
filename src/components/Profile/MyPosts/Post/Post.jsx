import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://nnst1.gismeteo.ru/images/2018/10/094e6d43.jpg' />
                   {props.message}
            <div>
                <span>like</span> {props.likesCount}
            
            </div>
        </div>
    )
}

export default Post;