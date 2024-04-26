import { Router } from "express";
import { getUser, updateUser } from "../controllers/user_controller.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const router = Router();

router.get("/:id", verifyUser, getUser);
router.patch("/:id", verifyUser, updateUser);

export default router;