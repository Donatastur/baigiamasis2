import mongoose from "mongoose";

const clientsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 15,
  },
  lastname: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 35,
  },

  email: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 35,
  },
  data: {
    type: Date,
    require: true,
  },
  time: {
    type: Number,
    require: true,
    min: 1,
    max: 13,
  },
});

export default mongoose.model("Client", clientsSchema);
