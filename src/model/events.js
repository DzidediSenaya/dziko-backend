import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

export const eventModel = mongoose.model('Event', EventSchema);
