import mongoose, { mongo } from "mongoose";


const mongoDBConnection = async () => {

    try {

        const connection = mongoose.connect(`mongodb://localhost:27017/mongo`);

        console.log(`mongoDB server is connected`.bgMagenta);
        
    } catch (error) {
        console.log(error);
    }


}


export default mongoDBConnection;