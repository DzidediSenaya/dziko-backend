import { Router } from "express";
import { addProject, getAllProjects, getProject, updateProject, deleteProject } from "../controllers/project_controller.js";
import { addNews, getAllNews, getNews, updateNews, deleteNews } from "../controllers/news_controller.js";
import { addEvent, getAllEvents, getEvent, updateEvent, deleteEvent } from "../controllers/event_controller.js";

export const router = Router();

// Project routes
router.post('/api/projects', addProject); // Create a new project
router.get('/api/projects', getAllProjects); // Retrieve all projects
router.get('/api/projects/:id', getProject); // Retrieve a specific project by its ID
router.put('/api/projects/:id', updateProject); // Update a specific project by its ID
router.delete('/api/projects/:id', deleteProject); // Delete a specific project by its ID

// News routes
router.post('/api/news', addNews); // Create a new news article
router.get('/api/news', getAllNews); // Retrieve all news articles
router.get('/api/news/:id', getNews); // Retrieve a specific news article by its ID
router.put('/api/news/:id', updateNews); // Update a specific news article by its ID
router.delete('/api/news/:id', deleteNews); // Delete a specific news article by its ID

// Event routes
router.post('/api/events', addEvent); // Create a new event
router.get('/api/events', getAllEvents); // Retrieve all events
router.get('/api/events/:id', getEvent); // Retrieve a specific event by its ID
router.put('/api/events/:id', updateEvent); // Update a specific event by its ID
router.delete('/api/events/:id', deleteEvent); // Delete a specific event by its ID

export default router;