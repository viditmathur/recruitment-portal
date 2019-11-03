var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema =new Schema({
	
    id:{
        type:String,
        unique:true,
    },

	email:{
		type:String,
        unique:true,
        required:true
	},
	
	role:{
		type:String,
        required:true	
	},
	password:{
        type:String,
        required:true	
	}
	
});
	module.exports= mongoose.model('user',userSchema);