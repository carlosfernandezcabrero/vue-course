import mongoose from "mongoose";

const password = process.env.DB_PASSWORD;
const username = process.env.DB_USERNAME;
const databaseName = process.env.DB_NAME;

const uri = `mongodb+srv://${username}:${password}@cluster0.2lpan.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

export const connectFunction = async () => {
  await mongoose.connect(uri, {
    minPoolSize: 1,
    maxPoolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return mongoose.connection;
};

mongoose.connection.on("error", (err) => {
  console.log(`An error has ocurred ${err}`);
});

mongoose.connection.once("open", () => {
  console.log("Connected to database success.");
});
