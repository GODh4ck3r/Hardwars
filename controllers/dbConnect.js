import {connect} from "mongoose"

const username = process.env.DB_USER
const password = process.env.DB_PASS

connect(`mongodb+srv://${username}:${password}@hardwars.nrrgwnt.mongodb.net/Hard?retryWrites=true&w=majority`).then(()=>{
    console.log("Connect to db")
}).catch(()=>{
    console.error("DB not connected")
})


