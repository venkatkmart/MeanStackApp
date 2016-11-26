var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    var courseSchema = new Schema({
      CourseName:String,
      CreatedDate:{ type: Date, default: Date.now }
    });


    mongoose.model("course", courseSchema);
