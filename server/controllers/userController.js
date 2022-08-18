const errorHandler = require("../error/errorHandler");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');


class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
    if (!email || !password) {
      return next(errorHandler.badRequest("Missing email and/or password"));
    }
    const checkExistingEmail = await User.findOne({where: {email}});
      if (checkExistingEmail) {
        return next(errorHandler.badRequest("This email already exists")); 
      }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({email, role, password: hashPassword});
    const basket = await Basket.create({userId: user.id});  
    const token = jwt.sign
    (
      {id: user.id, email: user.email, role}, 
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
    )
    return res.json({token});  
  }

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(errorHandler.badRequest("Input id"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
