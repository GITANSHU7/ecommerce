const Fuel = require("../models/fuel");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    // const fuel = await new fuel({ name, slug: slugify(name) }).save();
    // res.json(fuel);
    ////Sort the result by name:
  //var sort = { name: 1 };
  //dbo.collection("customers").find().sort(sort).toArray(function(err, result)
    res.json(await new Fuel({ name, slug: slugify(name) }).save());
  } catch (err) {
    // console.log(err);
    res.status(400).send("Create fuel failed");
  }
};

exports.list = async (req, res) =>
  res.json(await Fuel.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
  let fuel = await Fuel.findOne({ slug: req.params.slug }).exec();
  res.json(fuel);
};

exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Fuel.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Create update failed");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Fuel.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Create delete failed");
  }
};
