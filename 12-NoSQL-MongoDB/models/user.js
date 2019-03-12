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
    const updateCart = { items: [{ ...product, quantity: 1 }]};
    const db = getDb();
    db.collection('users').updateOne(
      {_id: new ObjectId(this)},
      { $set: {cart: updateCart}}
    )
  }

  static findById(userId) {
    const db = getDb();
    return db.collection('users').findOne({ _id: new ObjectId(userId) });
  }
}

module.exports = User;
