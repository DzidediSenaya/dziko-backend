import { Router } from "express";
import { checkLoginCredentials } from "../middlewares/checklogincredentials.js";
import { checkUserExists } from "../middlewares/verifyuserexistence.js";
import { login, logout, signup } from "../controllers/auth_controller.js";

const router = Router();

router.post("/signup", checkUserExists, signup);
router.post("/login", checkLoginCredentials, login);
router.get("/logout", logout);

export default router;