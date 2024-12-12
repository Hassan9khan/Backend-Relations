import express from "express"
import {addStudent} from "../controllers/studentContorller.js"


const router = express.Router()

router.post("/student" , addStudent)

export default router