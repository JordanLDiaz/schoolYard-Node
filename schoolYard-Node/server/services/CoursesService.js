import { dbContext } from "../db/DbContext.js";

class CoursesService {
  async getAllCourses(query) {
    // NOTE when you go find these courses, I also want you to populate the 'school' onto those objects
    const courses = await dbContext.Courses.find(query).populate('school')
    return courses
  }

  async getCoursesBySchool(schoolId) {
    // NOTE go and find me all of the courses where the schoolId matches the schoolId we passed through
    const courses = await dbContext.Courses.find({ schoolId: schoolId })
    return
  }

  async createCourse(courseData) {
    const newCourse = await dbContext.Courses.create(courseData)
    return newCourse
  }

}

export const coursesService = new CoursesService();