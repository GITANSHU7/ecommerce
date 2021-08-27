const Product = require("../models/product");
const slugify = require("slugify");


exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title);
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    //res.status(400).send("Create product failed");
  
    res.status(400).json({
      err:err.message,
    })
  }
};

// to query product saved in data base

exports.listAll = async(req,res) => {
  let products = await Product.find({})
  .populate("brand")
  .populate("models")
.sort([["createdAt" , "desc"]])
  .exec();
  res.json(products);
}


exports.remove = async (req, res) => {
  try {
    const deleted = await Product.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("Product delete failed");
  }
};


exports.read = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
    .populate("brand")
    .populate("models")
    .exec();
  res.json(product);
};

exports.update = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("PRODUCT UPDATE ERROR ----> ", err);
    // return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};


// WITHOUT PAGINATION
// exports.list = async (req, res) => {
//   try {
//     // createdAt/updatedAt, desc/asc, 3
//     const { sort, order, limit } = req.body;
//     const products = await Product.find({})
//       .populate("category")
//       .populate("subs")
//       .sort([[sort, order]])
//       .limit(limit)
//       .exec();

//     res.json(products);
//   } catch (err) {
//     console.log(err);
//   }
// };

// WITH PAGINATION
exports.list = async (req, res) => {
  // console.table(req.body);
  try {
    // createdAt/updatedAt, desc/asc, 3
    const { sort, order, page  } = req.body;
    const currentPage = page || 1;
    const perPage = 12 ; // 3

    const products = await Product.find({})
      .skip( perPage * (currentPage - 1))
      .populate("brand")
      .populate("models")
      .sort([[sort, order]])
      .limit(perPage)
      .exec();

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.productsCount = async (req, res) => {
  let total = await Product.find({}).estimatedDocumentCount().exec();
  res.json(total);
};

exports.listRelated = async (req, res) => {
  const product = await Product.findById(req.params.productId).exec();

  const related = await Product.find({
    _id: { $ne: product._id },
    brand: product.brand,
  })
    .limit(4)
    .populate("brand")
    .populate("models")
    .populate("postedBy")
    .exec();

  res.json(related);
};

//Search Filter   ,   price

const handleQuery = async(req,res,query) => {
  const products = await Product.find({ $text : {$search : query}})
.populate("brand" , "_id name")
.populate("models" , "_id name")
.populate("postedBy" , "_id name")
.exec()
res.json(products)
} 

exports.searchFilters = async(req,res) => {
  const {query , price , brand , model ,type } = req.body;

  if (query) {
    console.log('query' , query)
    await handleQuery(req,res,query);
  }

    //price [20,2000]
if(price !==undefined){
  console.log("price --->" , price);
  await handlePrice(req,res,price)
}
// brand filter

if (brand) {
  console.log("brand --->" , brand);
  await handleBrand(req,res,brand);
}
   if (model) {
  console.log("model ---> ", model);
  await handleModel(req, res, model);
}

if (type) {
console.log("type ---> ", type);
await handleType(req, res, type);
}

}

//brand
{/*
const handleBrand = async (req, res ,brand) => {

  const products = await Product.find({ brands : brand })
  .populate("brand" , "_id name")
  .populate("models" , "_id name")
  .populate("postedBy" , "_id name")
  .exec()
  res.json(products)
};

*/}

//price filter

const handlePrice = async(req,res,price) => {
try {
  let products = await Product.find({
    price : {
      $gte : price[0],
      $lte: price[1],
    },
  })
  .populate("brand" , "_id name")
  .populate("models" , "_id name")
  .populate("postedBy" , "_id name")
  .exec()

  res.json(products)
} catch (err) {
  console.log(err);
}

};



 
const handleModel = async (req, res, model) => {
  const products = await Product.find({ models: model })
    .populate("brand", "_id name")
    .populate("models", "_id name")
    .populate("postedBy", "_id name")
    .exec();

  res.json(products);
};

const handleType = async (req, res, type) => {
  const products = await Product.find({  type })
    .populate("brand", "_id name")
    .populate("models", "_id name")
    .populate("postedBy", "_id name")
    .exec();

  res.json(products);
};




const handleBrand = async (req, res, brand) => {
  try {
    let products = await Product.find({ brand })
      .populate("brand", "_id name")
      .populate("models", "_id name")
      .populate("postedBy", "_id name")
      .exec();

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};