var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var jobSeekerMappingSchema =new Schema({
	
    jobId:{
        type:String,
        unique:true,
        required:true
    },

	seekerId:{
		type:String,
        unique:true,
        required:true
	}
	
	
	
});
	module.exports= mongoose.model('jobSeekerMapping',jobSeekerMappingSchema);