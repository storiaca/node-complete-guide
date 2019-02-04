const fs = require('fs');
const path = require('path');

const pathDir = require('../util/path');

module.exports = class Product {
  constructor(t) {
    this.title = t; 
  }

  save() {
    const p = path.join(pathDir, 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if(!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });  
  }

  static fetchAll() {
    const p = path.join(pathDir, 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return []
      }
      return JSON.parse(fileContent);
    })
  } 
} 