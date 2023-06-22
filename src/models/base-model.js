import { Schema, model } from "mongoose";

const dataBase = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  number: {
    type: Schema.Types.Number,
    required: true,
  },
  mode: {
    type: Schema.Types.String,
    required: true,
  },
  "Online service": {
    type: Schema.Types.String,
    required: true,
  },
  "Larger storage": {
    type: Schema.Types.String,
    required: true,
  },
  "Customizable profile": {
    type: Schema.Types.String,
    required: true,
  },
});

const newData = model("newData", dataBase);
export default newData;
