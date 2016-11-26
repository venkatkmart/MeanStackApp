var course = require('mongoose').model('course'),
	passport = require('passport');

  var courseCtrl = {};

  courseCtrl.getAll = function(req, res){
   course.find({},function(err, courses) {
  		if (err) {
  			return json(err);
  		} else {
        console.log(courses);
  			res.json(courses);
  		}
  	});
  };
/*  courseCtrl.findCourse = function(req, res){
    Course.find({}, function(err, courses) {
      if (err) {
        return json(err);
      } else {
        res.json(courses);
      }
    });
  };*/

  courseCtrl.addCourse = function(req,res){
    var courseSchema = new course(req.body);
  	courseSchema.save(function(err,data) {
  		if (err) {
  			return next(err);
  		} else {
  			res.json(data);
  		}
  	});
  };

  module.exports=courseCtrl;
