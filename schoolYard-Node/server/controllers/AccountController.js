import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { courseStudentsService } from "../services/CourseStudentsService.js"

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/:accountId/courses', this.getCoursesByAccountId)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getCoursesByAccountId(req, res, next) {
    try {
      const accountId = req.params.accountId
      const accountCourses = await courseStudentsService.getCourseByAccountId(accountId)
      return res.send(accountCourses)
    } catch (error) {
      next(error)
    }
  }
}
