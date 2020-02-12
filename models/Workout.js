const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
    }
})

const workout = mongoose.model("Workout", workoutSchema);
module.exports = workout;