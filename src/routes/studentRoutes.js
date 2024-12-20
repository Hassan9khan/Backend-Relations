import express from "express"
import {addStudent, getAllStudent, getStudent, sendEmail} from "../controllers/studentContorller.js"


const router = express.Router()

router.post("/student" , addStudent)
router.get("/student/:id" , getStudent)
router.get("/allstudent" , getAllStudent)
router.get("/sendemail" , sendEmail)

export default router