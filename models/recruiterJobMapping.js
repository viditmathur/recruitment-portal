var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var recruiterJobMappingSchema =new Schema({
	
    jobId:{
        type:String,
        unique:true,
        required:true
    },

	recruiterId:{
		type:String,
        unique:true,
        required:true
	}
	
	
	
});
	module.exports= mongoose.model('recruiterJobMappingSchema',recruiterJobMappingSchema);