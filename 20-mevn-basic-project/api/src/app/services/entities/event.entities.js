import mongoose from "mongoose";

const { Schema, model } = mongoose;

const view = {
  toJSON: {
    transform(doc, ret) {
      return {
        id: ret._id,
        name: ret.name,
        description: ret.description,
        people: ret.people,
        date: ret.date,
        finished: ret.finished,
        userId: ret.userId
      };
    }
  }
};

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      unique: true,
      min: [1, "The length of name must be more that 1 character"]
    },
    description: { type: String },
    people: {
      type: Number,
      required: [true, "The number of people is required"],
      min: [1, "The min value for people is 1"]
    },
    date: {
      type: String,
      required: [true, "The date of event is required"],
      validate: [
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/,
        "The date format is not correct"
      ]
    },
    finished: { type: Boolean, default: false },
    userId: {
      type: String,
      required: [true, "The user ID that creates the event is required"]
    }
  },
  view
);

const updateSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "The name is required"],
      min: [1, "The length of name must be more that 1 character"]
    },
    description: { type: String },
    people: {
      type: Number,
      required: [true, "The number of people is required"],
      min: [1, "The min value for people is 1"]
    },
    date: {
      type: String,
      required: [true, "The date of event is required"],
      validate: [
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/,
        "The date format is not correct"
      ]
    },
    finished: { type: Boolean },
    userId: {
      type: String,
      required: [true, "The user ID that creates the event is required"]
    }
  },
  view
);

const eventSchema = new Schema(
  {
    name: { type: String },
    userId: { type: String }
  },
  view
);

export const Event = model("event", eventSchema, "events");
export const RegisterEvent = model("registerEvent", registerSchema, "events");
export const UpdateEvent = model("updateEvent", updateSchema, "events");
