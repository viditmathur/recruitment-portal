var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var seekerSchema =new Schema({
	
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

    skills:{
		type:Array
	},
	contactNumber:{
		type:Number,
        required:true
	},
	
	currentOrganisation:{
		type:String,
        required:true
	},
	
	totalExperience:{
        type:String,
        required:true
	}
	
	
	
});
	module.exports= mongoose.model('seeker',seekerSchema);