import { Schema, model } from "mongoose";

const dataBase = new Schema({
  name: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
  },
  number: {
    type: Schema.Types.Number,
  },
  mode: {
    type: Schema.Types.String,
  },
  Online_service: {
    type: Schema.Types.String,
  },
  Larger_storage: {
    type: Schema.Types.String,
  },
  Customizable_profile: {
    type: Schema.Types.String,
  },
});

const newData = model("newData", dataBase);
export default newData;
