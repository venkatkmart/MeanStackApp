var courseCtrl = require('../../app/controllers/course.controller'),
	passport = require('passport');

  module.exports = function(app) {
    app.route("/courses").get(courseCtrl.getAll);
    app.route("/courses").post(courseCtrl.addCourse);
  };
