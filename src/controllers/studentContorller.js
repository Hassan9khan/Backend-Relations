import Student from "../models/studentModel.js";
import Course from "../models/courseModel.js";

const addStudent = async (req, res) => {
  const { fullName, email, enrolledCourse } = req.body;

  if (!fullName || !email)
    return res.status(400).json({ message: "Fields are required" });

  const student = await Student.create({
    fullName,
    email,
    enrolledCourse,
  });

  const course = await Course.findByIdAndUpdate(enrolledCourse, {
    $push: { enrolledStudents: student._id },
  });

  res.json({message: "added successfully"})
};




export  {addStudent }