import mongoose, { mongo } from "mongoose";

const TestSchema = mongoose.Schema({
    name : {
        type : "String", 
        required : true
    },
    email : {
        type : "String", 
        required : true
    },    
    gender : {
        type : "String", 
        enum : ["male", "female"]
    },
    foods : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : "food"
    },
    isAdmin : {
        type : "boolean", 
        default : false
    }
}, {
    timestamps : true
});

// static method
TestSchema.statics.getGender = function(gender){
    return this.where({ gender : gender});
}
// query method
TestSchema.query.getGender = function(gender){
    return this.where({ gender : gender});
}

// custom methods 
TestSchema.methods.welcomeMSG = function(){
    return `your name is ${this.name}`;
}

// custom property
TestSchema.virtual("alertMSG").get(function (){
    return `Mr ${this.name}, your are alert`;
});


// create pre(before) middleware
TestSchema.pre('save', function (next){
    this.gender = "Female";
    next();
});

// create post(after) middleware
TestSchema.post('save', function (doc, next){
    doc.gender = "male";
    next();
});




export default mongoose.model('Test', TestSchema);