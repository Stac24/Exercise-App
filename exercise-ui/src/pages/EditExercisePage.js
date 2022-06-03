import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const EditMoviePage = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited exercise")
        }else{
            alert(`Failed to edit movie, status code = ${response.status}`);
        }
        history.push('/');
    };


    return (
        <div>
             <h1>Edit an Exericse</h1>
            <div>
                <label> Name </label>
                <label> Reps </label>
                <label>Weight</label>
                <label>Units</label>
                <label>Date</label>
            </div>
         
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}/>
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)}/>

            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}/>

            <select onChange={e => setUnit(e.target.value)}>
                <option value="lbs"> lbs </option>
                <option value="kgs"> kgs </option>
            </select>

            <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)}/>

            <button
                onClick={editExercise}
            >Save</button>
        </div>
    );
}



export default EditMoviePage;