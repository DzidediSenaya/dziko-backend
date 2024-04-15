import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectName: {
        type: String,
    },
    location: {
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
    },
    gallery: {
        type: String // image paths will be stored as strings
    }
});

export const projectModel = mongoose.model('Project', ProjectSchema);
