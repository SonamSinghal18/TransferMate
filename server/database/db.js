import mongoose from 'mongoose';


const DBConnection= async()=>{
    const MONGO_URI=`mongodb+srv://sonamsinghal018:%40Singhal18@file-sharing.rhl7x.mongodb.net/filesharing?retryWrites=true&w=majority`;
    // const MONGODB_URI=  `mongodb+srv://sonamsinghal018:%40Singhal18@file-sharing.rhl7x.mongodb.net/filesharing?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
    }); 
       console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}



export default DBConnection;