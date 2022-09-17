import Test from "../models/test.js";




const testController = async () => {
    
    try {

        // statics method
        // const user1 =  await Test.getGender("Female");

        // // query method
        // const user2 =  await Test.find().getGender('Female');

        // // custom methods with intance
        // const user3 =  await Test.findById({ _id : "6324900c3ac90c58d1585c6c"});
        // console.log(user3.welcomeMSG());



        // custom property call with intance
        // const user3 =  await Test.findById({ _id : "63248ff8aca0549ac29aae69"});
        // console.log(user3.alertMSG);

        const user = await Test.findById("63248ff8aca0549ac29aae69");

        await user.save();
        
        console.log(user);
        
        
    } catch (error) {
        console.log(error.message);
    }

}


export default testController;