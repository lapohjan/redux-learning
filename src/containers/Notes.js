import React from 'react';
import { useSelector } from 'react-redux'
import '../App.css'

const Notes = () => {
const notes = useSelector((state) => state);

    return (
        <div>
            <h2>Todo list</h2>
            <ul>
                {notes.map((note) => (
                <li key={note.id}>{note.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;