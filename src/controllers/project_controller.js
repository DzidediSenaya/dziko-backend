import { projectModel } from "../model/projects.js";

export const addProject = async (req, res) => {
    try {
        const data = req.body;
        const addData = await projectModel.create(data);
        console.log(data);
        res.send(addData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllProjects = async (req, res) => {
    try {
        const getData = await projectModel.find({});
        res.json({ projects: getData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getProject = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await projectModel.findById(id);
        if (!getId) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.json({ project: getId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateProject = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedProject = await projectModel.findByIdAndUpdate(id, data, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.json({ project: updatedProject });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProject = await projectModel.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
