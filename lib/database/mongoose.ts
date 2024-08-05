import mongoose, { Mongoose } from "mongoose";

const MONGO_URL=process.env.MONGO_URL;


interface MongoooseConnection{
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongoooseConnection=(global as any).mongoose

if(!cached){
    cached=(global as any).mongoose={
        conn:null, promise:null
    }
}

export const connectDatabase=async()=>{
    if(cached.conn) return cached.conn;

    if(!MONGO_URL) throw new Error("Missing mongodb_URL");
     cached.promise=cached.promise || mongoose.connect(MONGO_URL,{dbName: 'Nextify',bufferCommands:false})

     cached.conn=await cached.promise;
        console.log("connected mongodb")
     return cached.conn;
}