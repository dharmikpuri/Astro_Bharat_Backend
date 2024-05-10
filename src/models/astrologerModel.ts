import { Mode } from "fs";
import mongoose,{Model,Document} from "mongoose"

interface IUser extends Document{
 name:string,
 gender:string,
 email:string,
 languages:[string],
 specialities:[string],
 profileImageUrl:string
}
const astrologerSchema = new mongoose.Schema<IUser>({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        enum:["male","female","others"],
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    languages:{
        type:[String],
        require:true
    },
    specialities:{
        type:[String],
        require:true
    },
    profileImageUrl:{
        type:String,
        require:true
    }
})

export const astrologerModel:Model<IUser> = mongoose.model<IUser>("astologersDetails",astrologerSchema);