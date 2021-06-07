import mongoose from "mongoose";

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    //using existing connection object

    return;
  }

  //new db conn
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
