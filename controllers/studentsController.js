const db = require("../models");

module.exports = {
    // lsit of functions that will be exported when we require our book model to perform crud operations 
<<<<<<< HEAD
    // findAll: function(req, res) {
    //     db.Student
    //       .find(req.query)
    //       .then(dbStudent => res.json(dbStudent))
    //       .catch(err => res.status(422).json(err));
    //   }

=======
    findAll: function(req, res) {
        db.Student
          .find({})
          .then(dbStudent => res.json(dbStudent))
          .catch(err => res.status(422).json(err));
      },
>>>>>>> 64a105ef65aa4eaaa9fd1670088c0dd8d9979be7
    //   findById: function(req, res) {
    //     db.User
    //       .findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   }

    //updating the student attendance status in DB after the submission from teacher(user)
    update: function(req, res) {
        db.Users
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    };