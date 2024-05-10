import { Request, Response } from "express";
import { astrologerModel } from "../models/astrologerModel";

// ASTROLOGER REGISTRATION 
export const AstrologerRegistration = async (req: Request, res: Response) => {
    const { name, gender, email, languages, specialities, image } = req.body;
    try {
        const userData = new astrologerModel({
            name: name,
            gender: gender,
            email: email,
            languages: languages,
            specialities: specialities,
            profileImageUrl: image
        });
        await userData.save();
        res.send("Data Added Successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};

// GETTING ALL ASTROLOGERS DETAILS 
export const getAllAstrologers = async () => {
    try {
        const astrologerData = await astrologerModel.find();
        console.log(astrologerData, "Astrologer Data")
    } catch (error) {
        console.log(error)
    }
}