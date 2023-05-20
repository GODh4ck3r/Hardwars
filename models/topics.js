import { Schema,model } from "mongoose";

const topicsSchema = new Schema({
    name:{
        type: String
    },
    enrollmentCount:{
        type: Number,
        default: 0
    }
})


const topicsModel = model("topics",topicsSchema)


export default topicsModel

