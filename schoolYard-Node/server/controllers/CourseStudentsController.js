import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { courseStudentsService } from "../services/CourseStudentsService.js";

export class CourseStudentsController extends BaseController {
  constructor() {
    super('api/courseStudents')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCourseStudent)
  }
  async createCourseStudent(req, res, next) {
    try {
      const courseStudentData = req.body
      // NOTE need to cast the account id to whatever the logged in user is, don't trust the user to tell you who they are, let the db handle that
      courseStudentData.accountId = req.userInfo.id
      const newCourseStudent = await courseStudentsService.createCourseStudent(courseStudentData)
      return res.send(newCourseStudent)
    } catch (error) {
      next(error)
    }
  }
}