var React = require('react');
var reactDom = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = groceryItemStore.getItems();
function render() {
    reactDom.render(<GroceryItemList items={initial}/>, app);
};+

groceryItemStore.onChange((items) => {
    initial = items;
    render();
})

render();