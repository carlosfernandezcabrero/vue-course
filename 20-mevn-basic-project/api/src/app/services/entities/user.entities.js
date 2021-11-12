import mongoose from "mongoose";

const { Schema, model } = mongoose;

const enumRole = {
  values: ["POWER_USER", "ADMIN"],
  message: "{VALUE} is not valid role"
};

const view = {
  toJSON: {
    transform(doc, ret) {
      return {
        id: ret._id,
        name: ret.name,
        email: ret.email,
        role: ret.role,
        active: ret.active
      };
    }
  }
};

const verifyView = {
  toJSON: {
    transform(doc, ret) {
      return {
        id: ret._id,
        name: ret.name,
        email: ret.email,
        role: ret.role
      };
    }
  }
};

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      unique: true
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true
    },
    password: { type: String, required: [true, "The password is required"] },
    role: {
      type: String,
      default: "POWER_USER",
      enum: enumRole
    },
    active: { type: Boolean, default: true }
  },
  view
);

const updateSchema = new Schema(
  {
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, immutable: true },
    active: { type: Boolean }
  },
  view
);

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    role: { type: String },
    userId: { type: String }
  },
  view
);

const verifyUserSchema = new Schema(
  {
    name: { type: String },
    role: { type: String },
    email: { type: String },
    password: { type: String }
  },
  verifyView
);

export const User = model("user", userSchema, "users");
export const RegisterUser = model("registerUser", registerSchema, "users");
export const UpdateUser = model("updateUser", updateSchema, "users");
export const VerifyUser = model("verifyUser", verifyUserSchema, "users");
