const brand = require("../models/brand");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    // const brand = await new brand({ name, slug: slugify(name) }).save();
    // res.json(brand);
    ////Sort the result by name:
  //var sort = { name: 1 };
  //dbo.collection("customers").find().sort(sort).toArray(function(err, result)
    res.json(await new brand({ name, slug: slugify(name) }).save());
  } catch (err) {
    // console.log(err);
    res.status(400).send("Create brand failed");
  }
};

exports.list = async (req, res) =>
  res.json(await brand.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
  let brand = await brand.findOne({ slug: req.params.slug }).exec();
  res.json(brand);
};

exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await brand.findOneAndUpdate(
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
    const deleted = await brand.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Create delete failed");
  }
};