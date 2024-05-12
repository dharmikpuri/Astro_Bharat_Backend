import { Request, Response } from "express";
import { astrologerModel } from "../models/astrologerModel";

// ASTROLOGER REGISTRATION 
export const AstrologerRegistration = async (req: Request, res: Response) => {
    const { name, gender, email, languages, specialities, image } = req.body;
    console.log(image,"Image")
    try {
        const existingAstrologer = await astrologerModel.findOne({ email });
        if (existingAstrologer) {
            return res.status(200).send({ message: "Email already registered. Please try with another one." });
        }
        const astrologerData = new astrologerModel({
            name,
            gender,
            email,
            languages,
            specialities,
            profileImageUrl: image
        });
        await astrologerData.save();
        res.status(200).send({ message: "Astrologer Added Successfully", data: astrologerData });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// GETTING ALL ASTROLOGERS DETAILS 
export const getAllAstrologers = async (req: Request, res: Response) => {
    try {
        const astrologerData = await astrologerModel.find();
        res.status(200).send(astrologerData);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

// UPDAING ASTROLOGER DETAILS
export const updateAstrologer = async (req: Request, res: Response) => {
    const astrologer_id = req.params.id
    const { name, gender, email, languages, specialities, image } = req.body;
    try {
        const updatedAstologer = await astrologerModel.findByIdAndUpdate(astrologer_id, {
            name,
            gender,
            email,
            languages,
            specialities,
            profileImageUrl: image
        }, { new: true })
        if (!updatedAstologer) {
            return res.status(404).send({ message: "Astrologer Not Found" });
        }
        res.status(200).send({ message: "Astrologer Updated Successfully", data: updatedAstologer });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
}