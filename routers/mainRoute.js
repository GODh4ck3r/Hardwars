import { Router } from "express";

const mainRoute = Router()

mainRoute.get(['/','/home'],(req,res)=>{
    res.render('pages/home')
})

mainRoute.get('/register',(req,res)=>{
    res.render('pages/register')
})
mainRoute.get('/contact',(req,res)=>{
    res.render('pages/contact')
})

mainRoute.get('/about',(req,res)=>{
    res.render('pages/about')
})

export default mainRoute


