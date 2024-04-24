import { Router } from "express";
import { addProject, getAllProjects, getProject, updateProject, deleteProject } from "../controllers/project_controller.js";
import { addNews, getAllNews, getNews, updateNews, deleteNews } from "../controllers/news_controller.js";
import { addEvent, getAllEvents, getEvent, updateEvent, deleteEvent } from "../controllers/event_controller.js";

export const router = Router();

router.post('/api/projects', addProject);
router.get('/api/projects', getAllProjects);
router.get('/api/projects/:id', getProject);
router.put('/api/projects/:id', updateProject);
router.delete('/api/projects/:id', deleteProject);

router.post('/api/news', addNews);
router.get('/api/news', getAllNews);
router.get('/api/news/:id', getNews);
router.put('/api/news/:id', updateNews);
router.delete('/api/news/:id', deleteNews);

router.post('/api/events', addEvent);
router.get('/api/events', getAllEvents);
router.get('/api/events/:id', getEvent);
router.put('/api/events/:id', updateEvent);
router.delete('/api/events/:id', deleteEvent);

export default router;
