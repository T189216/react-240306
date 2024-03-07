import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "Ellie",
        comment: "안녕하세요.",
    },
    {
        name: "Isabel",
        comment: "반가워요!",
    },
    {
        name: "Mabel",
        comment: ":)",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;