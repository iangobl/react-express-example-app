var React = require('react');
var reactDom = require('react-dom');

console.log("Hello from jsx");

var GroceryItemList = require('./components/GroceryItemList.jsx');

reactDom.render(<GroceryItemList />, app);