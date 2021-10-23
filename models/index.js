// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)
Category.hasMany(Product, {
  foreignKey: 'product.id'
});

Product.belongsTo(Category, {
  foreignKey: 'category.id' 
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'Tags'
})

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'Products with Tag' 
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
