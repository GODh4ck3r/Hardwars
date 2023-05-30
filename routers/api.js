import router from "express";
import * as mainController from "../controllers/mainController.js";
const api = router()


api.post("/team",async (req,res)=>{
    var teamData = req.body
    // console.log(teamData)
    var data = await mainController.saveTeam(teamData)
    data.status? res.send(data) : res.status(404).send(data)
})

api.get("/topics",async (req,res)=>{
    var data = await mainController.getTopics()
    data.status? res.send(data) : res.status(404).send(data)
})


export default api



