import mongoose from 'mongoose';
const { Schema } = mongoose;

const accesstokenSchema = new Schema({
  accesstoken: String, // String is shorthand for {type: String}
  email: String,
});

const accessTokenModel = mongoose.model("accessToken",accesstokenSchema)

export default accessTokenModel
