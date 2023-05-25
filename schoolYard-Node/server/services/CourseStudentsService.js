import { dbContext } from "../db/DbContext.js";

class CourseStudentsService {
  async getStudentsByCourse(courseId) {
    const courseStudents = await dbContext.CourseStudents.find({ courseId: courseId }).populate('student')
    return courseStudents
  }
  async createCourseStudent(courseStudentData) {
    const newCourseStudent = await dbContext.CourseStudents.create(courseStudentData)
    // NOTE on a create, we must do populate on separate line because it has to be created before we can populate
    await newCourseStudent.populate('course')
    await newCourseStudent.populate('student')
    return newCourseStudent
  }

  async getCourseByAccountId(accountId) {
    const accountCourses = await dbContext.CourseStudents.find({ accountId: accountId }).populate('course')
    return accountCourses
  }
}

export const courseStudentsService = new CourseStudentsService();