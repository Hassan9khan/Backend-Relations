import Student from "../models/studentModel.js";
import Course from "../models/courseModel.js";
import mongoose from "mongoose";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'emmalee.ohara68@ethereal.email',
      pass: 'mrwedur9dam8AYQYrn'
  }
});

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

  res.json({ message: "added successfully" });
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const student = await Student.findById(id).populate("enrolledCourse");
  if (!student) {
    res.status(404).json({
      message: "no todo found!",
    });
    return;
  }

  res.status(200).json(student);
};

// pagination
const getAllStudent = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 2;

  const skip = (page - 1) * limit;

  const students = await Student.find({}).skip(skip).limit(limit);
  res.json({ data: students, length: students.length });
};

const sendEmail = async () => {
  const info = await transporter.sendMail({
    from: '"Hassan Ahmed 👻" <emmalee.ohara68@ethereal.email>', // sender address
    to: "hassanahmed@gmail.com", // list of receivers
    subject: "Subject Hello ✔", // Subject line
    text: "123 Hello world?", // plain text body
    html: "<b>1111 Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // res.json({message: "email sent"})
};

export { addStudent, getStudent, getAllStudent , sendEmail};
