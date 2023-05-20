import {connect} from "mongoose"

const username = "upeshardwar"
const password = "0MC0NrGFipx4xW8L"

connect(`mongodb+srv://${username}:${password}@hardwars.nrrgwnt.mongodb.net/Hard?retryWrites=true&w=majority`).then(()=>{
    console.log("Connect to db")
}).catch(()=>{
    console.error("DB not connected")
})


