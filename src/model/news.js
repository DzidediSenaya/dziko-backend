import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

export const newsModel = mongoose.model('News', NewsSchema);
