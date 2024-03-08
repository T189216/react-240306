import React from 'react';

const students = [
    {
        id: 1,
        name: "Steve",
    },
    {
        id: 2,
        name: "Ellie",
    },
    {
        id: 3,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;