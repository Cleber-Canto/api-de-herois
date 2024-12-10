import { Router } from "express";
import { getHeroes, getHeroById, createHero, updateHero, deleteHero } from "../controllers/heroController";

const router = Router();

router.get("/heroes", getHeroes);
router.get("/heroes/:id", getHeroById);
router.post("/heroes", createHero);
router.put("/heroes/:id", updateHero);
router.delete("/heroes/:id", deleteHero);

export default router;
