import { coursesService } from "../services/CoursesService.js";
import { schoolsService } from "../services/SchoolsService.js";
import BaseController from "../utils/BaseController.js";

export class SchoolsController extends BaseController {
  constructor() {
    super('api/schools')
    this.router
      .get('', this.getAllSchools)
      .get('/:schoolId', this.getSchoolById)
      // NOTE this follows restful api conventions
      .get('/:schoolId/courses', this.getCoursesBySchool)
      .post('', this.createSchool)
    // .put('/:schoolId', this.editSchool)
    // .delete('/:schoolId', this.deleteSchool)
  }

  async getAllSchools(req, res, next) {
    try {
      const query = req.query
      const schools = await schoolsService.getAllSchools(query)
      return res.send(schools)
    } catch (error) {
      next(error)
    }
  }
  async getSchoolById(req, res, next) {
    try {
      const schoolId = req.params.schoolId
      const school = await schoolsService.getSchoolById(schoolId)
      return res.send(school)
    } catch (error) {
      next(error)
    }
  }

  async getCoursesBySchool(req, res, next) {
    try {
      const schoolId = req.params.schoolId
      const courses = await coursesService.getCoursesBySchool(schoolId)
      return res.send(courses)
    } catch (error) {
      next(error)
    }
  }

  async createSchool(req, res, next) {
    try {
      const schoolData = req.body
      const newSchool = await schoolsService.createSchool(schoolData)
      return res.send(newSchool)
    } catch (error) {
      next(error)
    }
  }

  // async editSchool(req, res, next) {
  //   try {

  //     return res.send()
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // async deleteSchool(req, res, next) {
  //   try {

  //     return res.send()
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}