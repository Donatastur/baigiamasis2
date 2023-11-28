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
    maxLength: 60,
  },
  date: {
    type: Date,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Client", clientsSchema);
