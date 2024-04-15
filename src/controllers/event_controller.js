import { eventModel } from "../model/events.js";

export const addEvent = async (req, res) => {
    try {
        const data = req.body;
        const addData = await eventModel.create(data);
        console.log(data);
        res.send(addData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllEvents = async (req, res) => {
    try {
        const getData = await eventModel.find({});
        res.json({ events: getData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await eventModel.findById(id);
        if (!getId) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.json({ event: getId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedEvent = await eventModel.findByIdAndUpdate(id, data, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.json({ event: updatedEvent });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedEvent = await eventModel.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

