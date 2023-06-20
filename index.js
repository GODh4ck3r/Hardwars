import 'dotenv/config'
import "./controllers/dbConnect.js"
import express  from "express";
import mainRoute from "./routers/mainRoute.js";
import {resolve} from 'path'
import api from "./routers/api.js";



const app = express()
const PORT = process.env.PORT || 4444


app.set('view engine', 'ejs');
app.use(express.static("assets"))
app.set('views', resolve('./views'));

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',mainRoute)
app.use('/api',api)

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
})



