const Model = require("../models/model");
const slugify = require("slugify");
const Product = require("../models/product");


exports.create = async (req, res) => {
  try {
    const { name , parent} = req.body;
    // const model = await new model({ name, slug: slugify(name) }).save();
    // res.json(model);
    ////Sort the result by name:
  //var sort = { name: 1 };
  //dbo.collection("customers").find().sort(sort).toArray(function(err, result)
    res.json(await new Model({ name, parent,slug: slugify(name) }).save());
  } catch (err) {
     console.log("model create error" , err);
    res.status(400).send("Create model failed");
  }
};

exports.list = async (req, res) =>
  res.json(await Model.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
  let model = await Model.findOne({ slug: req.params.slug }).exec();
  const products = await Product.find({models : model })
  .populate("brand").exec();
  res.json(model ,products);
};

exports.update = async (req, res) => {
  const { name,parent } = req.body;
  try {
    const updated = await Model.findOneAndUpdate(
      { slug: req.params.slug },
      { name, parent,slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Model update failed");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Model.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Model delete failed");
  }
};
