import topicsModel from "../models/topics.js";
import teamsModel from "../models/teams.js";
import assert from 'assert'


async function saveTeam(data) {
    try {
        // Check if topic id exists
        assert(!!data.topic)
        assert(await topicsModel.exists({_id: data.topic}))

        // Add team
        var team = await teamsModel.create(data)

        // Increment topic enrollmentCount
        await topicsModel.updateOne(
            {_id:data.topic},
            {
                $inc:{
                    enrollmentCount: 1
                }
            }
        )
    } catch (error) {
        // console.log(error.message)
        if(error.message.includes("teamName_1 dup key:")) return{
            status: false,
            msg: `Team Name: ${data.teamName} is already registered`
        }

        return {
            status: false,
            msg: "Data is Invalid or Redundant"
        }
    }

    if(!team) return {
        status: false,
        msg: "Error"
    } 
    
    return {
        status: true,
        msg: team.id
    }
}

async function getTopics(){
    try {
        var topics = await topicsModel.find({}).select("name")
        return {
            status: false,
            topics
        }
    } catch (error) {
        return{
            status: false
        }
    }
}

export {
    saveTeam,
    getTopics
}