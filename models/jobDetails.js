var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var jobSchema =new Schema({
	
    id:{
        type:String,
        unique:true,
        required:true
    },

	role:{
		type:String,
        unique:true,
        required:true
	},
    
    experience:{
		type:String,
        required:true
    },

    skills:{
		type:Array
    },
	
	organisation:{
		type:String,
        required:true
	}
	
	
	
});
	module.exports= mongoose.model('jobDetails',jobSchema);