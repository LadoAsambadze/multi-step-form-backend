import mongoose from "mongoose";

const connect = () => {
  const url = "";

  try {
    mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
