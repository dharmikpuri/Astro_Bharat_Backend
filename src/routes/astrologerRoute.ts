import express from "express"
import { AstrologerRegistration } from "../controllers/AstrologerController";

const astroRoute = express.Router();
astroRoute.post("/api/astrologers/register",AstrologerRegistration);
astroRoute.get("/api/astrologers",AstrologerRegistration)
