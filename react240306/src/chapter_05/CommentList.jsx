import React from 'react';
import Comment from './Comment';

function CommentList(props) {
    return (
        <div>
            <Comment name={"Ellie"} comment={"안녕하세요."} />
            <Comment name={"Isabel"} comment={"반가워요!"} />
        </div>
    );
}

export default CommentList;