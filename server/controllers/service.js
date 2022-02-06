const Service = require("../models/service");

exports.createService = async (req, res, next) => {

    const { vairent, brand, models, price } = req.body;

    const service = await Service.create({
        vairent, brand, models, price 
    })

    res.json(service)
}