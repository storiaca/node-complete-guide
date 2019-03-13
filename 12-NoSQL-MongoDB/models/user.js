const mongodb = require('mongodb');
const { getDb } = require('../util/database');

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this)
  }

  addToCart(product) {
    // const cartProduct = this.cart.itmes.findIndex(cp => {
    //   return cp._id === product.id;
    // });
    const updatedCart = { items: [{ productId: new ObjectId(product._id), quantity: 1 }]};
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart} }
      )
  }

  static findById(userId) {
    const db = getDb();
    return db.collection('users').findOne({ _id: new ObjectId(userId) });
  }
}

module.exports = User;
