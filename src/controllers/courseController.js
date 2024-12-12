import Course from "../models/courseModel.js"

const addCourse = async (req, res) => {
  const { name, duration } = req.body;

  if (!name) return res.status(400).json({ message: "name is required" });

  const course = await Course.create({ name, duration });
  res.json({ message: "course created" });

};

export default addCourse