var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var recruiterSchema =new Schema({
	
    id:{
        type:String,
        unique:true,
    },

	email:{
		type:String,
        unique:true,
        required:true
	},
    
    name:{
		type:String,
        required:true
    },

	contactNumber:{
		type:Number,
        required:true
	},
	
	organisation:{
		type:String,
        required:true
	}
	
	
});
	module.exports= mongoose.model('recruiter',recruiterSchema);