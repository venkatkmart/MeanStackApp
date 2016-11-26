var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    var providerSchema = new Schema({
      ProviderName:String,
      PhoneNumber:[Number],
      CreatedDate:{ type: Date, default: Date.now }
    });


    mongoose.model('Provider', providerSchema);
