import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const CreateExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added exercise")
        }else{
            alert(`Failed to add movie, status code = ${response.status}`);
        }
        history.push('/');
    };


    return (
        <div>
             <h1>Add an Exericse</h1>
            <div>
                <label className='name'> Name </label>
                <label className='reps'> Reps </label>
                <label className='weight'>Weight</label>
                <label className='units'>Units</label>
                <label className='date'>Date</label>
            </div>
         
            <input
                type="text"
                placeholder='Enter name here'
                value={name}
                onChange={e => setName(e.target.value)}/>
            <input
                type="number"
                placeholder='Enter reps here'
                value={reps}
                onChange={e => setReps(e.target.value)}/>

            <input
                type="number"
                placeholder='Enter weight here'
                value={weight}
                onChange={e => setWeight(e.target.value)}/>

            <select onChange={e => setUnit(e.target.value)}>
                <option value="lbs"> lbs </option>
                <option value="kgs"> kgs </option>
            </select>

            <input
                type="text"
                placeholder='Enter date here'
                value={date}
                onChange={e => setDate(e.target.value)}/>

            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
    };

export default CreateExercisePage;