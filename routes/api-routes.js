// needing models
const db = require("../models");

module.exports = function (app) {

//get for most recent workout
app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    }) 
})
//(checked, pulls up inputed workouts)


//post create a new workout
app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(response => {
        res.json(response);
    })
    })


//put/post to update workout
app.put("/api/workouts/:_id", (req, res) => {
    db.Workout.update({_id: req.params._id }, {$push: {body: req.body}}).then(function (dbWorkout) {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})

//get to get stats 
app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    }) 
})
//(checked/shows up with /stats)

}


//getting the id of the workout to show
// app.push("/api/workouts/:_id", function (req, res) {
//     db.Workout.update({_id: req.params._id }, req.body).then(function (dbWorkout) {
//         res.json(dbWorkout);
//     }).catch(err => {
//         res.json(err);
//     })
// })








