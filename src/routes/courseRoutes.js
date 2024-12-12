import express from "express"
import addCourse from "../controllers/courseController.js"


const router = express.Router()

router.post("/course" , addCourse)

export default router