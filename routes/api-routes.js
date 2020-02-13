// needing models
const db = require("../models");

module.exports = function (app) {

 //getting the works from the workout.js    
   app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Get single workout by id.
    app.get("/api/workouts/:_id", function (req, res) {
        db.Workout.findOne({
            where: {
                id: req.params._id
            }
        }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    // Post/Create a new workout in the database.
    app.post("/api/workouts", function (req, res) {
        db.Workout.create(req.body).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Update a workout in the database by id.
    app.put("/api/workouts/:_id", function (req, res) {
        db.Workout.update({_id: req.params._id }, req.body).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    //POPULATE
    app.get("/populateduser", (req, res) => {
        db.User.find({})
          .populate("exercises")
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.json(err);
          });
      });

    // Delete a workout in the database.
    app.delete("/api/workouts/:_id", function (req, res) {
        db.Workout.remove({
            where: {
                id: req.params._id
            }
        }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
}

