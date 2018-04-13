var React = require('react');
var reactDom = require('react-dom');

console.log("Hello from jsx");

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [
    {
        name: "Ice Cream"
    },
    {
        name: "Waffles"
    },
    {
        name: "Pancakes",
        purchased: "true"
    },
    {
        name: "Crisps"
    },
];

reactDom.render(<GroceryItemList items={initial}/>, app);