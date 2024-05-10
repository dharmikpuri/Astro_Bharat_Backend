import express from "express"
import { AstrologerRegistration, getAllAstrologers, updateAstrologer } from "../controllers/AstrologerController";

export const astroRoute = express.Router();
// REGISTER ASTROLOGER 
astroRoute.post("/api/astrologers/register",AstrologerRegistration);
// GET ALL ASTROLOGER 
astroRoute.get("/api/astrologers",getAllAstrologers);
//UPDATE ASTROLOGER
astroRoute.put("/api/astrologers/:id",updateAstrologer)