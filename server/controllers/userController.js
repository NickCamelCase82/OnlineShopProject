const errorHandler = require("../error/errorHandler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(errorHandler.badRequest("Missing email and/or password"));
    }
    const checkExistingEmail = await User.findOne({ where: { email } });
    if (checkExistingEmail) {
      return next(errorHandler.badRequest("This email already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(errorHandler.badRequest("User doesn't exist"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(errorHandler.badRequest("Wrong password"));
    }
    const token = generateJwt(user.id, user.password, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(errorHandler.badRequest("Input id"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
