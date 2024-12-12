import express from "express"
import {addCourse} from "../controllers/courseController.js"
import { getCourse } from "../controllers/courseController.js"


const router = express.Router()

router.post("/course" , addCourse)
router.get("/getcourse" , getCourse)

export default router