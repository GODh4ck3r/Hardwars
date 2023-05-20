import { Schema,model } from "mongoose";

const memberSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    college: {
        type:String,
        required: true
    },
    city: {
        type:String,
        required: true
    },
    mobile: {
        type:String,
        unique: true,
        required: true
    },
    email: {
        type:String,
        unique: true,
        required: true
    },
})

const teamsSchema = new Schema({
    teamName:{
        type: String,
        unique: true,
        required: true
    },
    mentorName:{
        type: String,
        required: true
    },
    topic:{
        type: Schema.Types.ObjectId,
        ref: "topics",
        required: true
    },
    member1: memberSchema,
    member2: memberSchema,
    member3: memberSchema,
    member4: memberSchema,

    date:{
        type: Date,
        default: Date.now
    }
})


const teamsModel = model("teams",teamsSchema)
export default teamsModel
