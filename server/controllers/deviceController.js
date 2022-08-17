const uuid = require("uuid");
const path = require("path");
const { Device } = require("../models/models");
const errorHandler = require("../error/errorHandler");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(device);
    } catch (e) {
      next(errorHandler.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const { brandID, typeId } = req.query;
    let devices;
    if (!brandID && !typeId) {
      devices = await Device.findAll();
    }
    if (!brandID && typeId) {
      devices = await Device.findAll({ where: { typeId } });
    }
    if (brandID && !typeId) {
      devices = await Device.findAll({ where: { brandID } });
    }
    if (brandID && typeId) {
      devices = Device.findAll({ where: { brandID, typeId } });
    }
    return res.json(devices);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const oneDevice = await Device.findOne({ where: { id } });
    return res.json(oneDevice);
  }
}

module.exports = new DeviceController();
