import { Schema,model } from "mongoose";


const teamsSchema = Schema({
    teamName:{
        type: String
    },
    mentorName:{
        type: String
    },
    topic:{
        type: Schema.Types.ObjectId,
        ref: "topics"
    },
    
})


