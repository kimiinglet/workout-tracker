// needing models
const db = require("../models");

module.exports = function (app) {

 //getting workout from the workout.js    
   app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        }) 
    })
    //(check)


    // Get single workout by id.
    app.get("/api/workouts/:_id", function (req, res) {
        db.Workout.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    //(null)


    // Crete new workout in database
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then(response => {
            res.json(response);
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


