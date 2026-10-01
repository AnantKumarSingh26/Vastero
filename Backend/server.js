import dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 3000

const startServer= async()=>{
    try{
        app.listen(PORT,()=>{
            console.log('Server is running on ',PORT);
        })
    }catch(error){
        console.log('Failed to start server:',error.message);
        process.exit(1);
    }
}