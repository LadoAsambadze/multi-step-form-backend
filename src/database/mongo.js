import mongoose from "mongoose";

const connect = () => {
  const url =
    "mongodb+srv://ladoasambadze1:bitcamp@cluster0.55fivd7.mongodb.net";

  try {
    mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
