import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";

class SchoolsService {
  async getAllSchools(query) {
    const schools = await dbContext.Schools.find(query)
    return schools
  }

  async getSchoolById(schoolId) {
    const school = await dbContext.Schools.findById(schoolId)
    // NOTE another way to grab the school by its id, pick one, both work the same
    // const school = await dbContext.Schools.find({_id: schoolId})
    if (!school) {
      throw new BadRequest('No school at this id.')
    }
    return school
  }

  async createSchool(schoolData) {
    const newSchool = await dbContext.Schools.create(schoolData)
    return newSchool
  }

}

export const schoolsService = new SchoolsService();