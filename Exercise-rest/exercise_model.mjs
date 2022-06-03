import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    "mongodb+srv://coxste:"+process.env.PROJECT_KEY+"@cs290.4ujl5.mongodb.net/UserDatabase?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.once("open", () => {
    console.log("Successsfully connected to MongoDB using Mongoose!")
});

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true},
    weight: { type: Number, required: true},
    unit: { type: String, required: true},
    date: { type: String, required: true}
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    return exercise.save();
}

const findExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const updateExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({_id: _id},
        { name: name, reps: reps, weight: weight, unit: unit, date: date });
    return result.modifiedCount;
}

const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
}


export {createExercise, findExercises, updateExercise, deleteById};

