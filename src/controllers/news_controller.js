import { newsModel } from "../model/news.js";

export const addNews = async (req, res) => {
    try {
        const data = req.body;
        const addData = await newsModel.create(data);
        console.log(data);
        res.send(addData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllNews = async (req, res) => {
    try {
        const getData = await newsModel.find({});
        res.json({ news: getData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getNews = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await newsModel.findById(id);
        if (!getId) {
            return res.status(404).json({ error: "News article not found" });
        }
        res.json({ news: getId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateNews = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedNews = await newsModel.findByIdAndUpdate(id, data, { new: true });
        if (!updatedNews) {
            return res.status(404).json({ error: "News article not found" });
        }
        res.json({ news: updatedNews });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteNews = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedNews = await newsModel.findByIdAndDelete(id);
        if (!deletedNews) {
            return res.status(404).json({ error: "News article not found" });
        }
        res.json({ message: "News article deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
