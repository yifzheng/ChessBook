import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
	firstname: {
		type: String,
	},
	lastname: {
		type: String,
	},
	username: {
		type: String,
		required: [true, "Username is required"],
		unique: [true, "Username already exists"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
	imageURL: {
		type: String,
		default: "",
	},
});

const UserModel = model("User", UserSchema);

export default UserModel;