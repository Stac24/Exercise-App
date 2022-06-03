import React from 'react';
import { TiDelete } from "react-icons/ti";
import { GrEdit } from "react-icons/gr";

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><GrEdit onClick={() => onEdit(exercise)}/></td>
            <td><TiDelete onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;