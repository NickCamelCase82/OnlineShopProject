const ErrorHandler = require("../error/errorHandler");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ErrorHandler.badRequest("Input id"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
