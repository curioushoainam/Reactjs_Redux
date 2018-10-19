var React = require('react');
var ReactDOM = require('react-dom');

import List from './comps/List.jsx';

ReactDOM.render(
	<List />
	,document.getElementById('root')
)

/**
 * toan tu *** 
 */
var obj = {
	id: 1,
	greet: 'hallo'
}

var obj1 = obj;
var obj2 = {...obj};
var obj3 = {...obj, land:'deutsch'};
var obj4 = {...obj, id: 9};
obj.id = 23;

console.log('obj1 : ', obj1);
console.log('obj2 : ', obj2);
console.log('obj3 : ', obj3);
console.log('obj4 : ', obj4);

var array = [1,2,3,4]
var arr1 = array;
var arr2 = [...array];
var arr3 = [3,2,1, ...array,8,9];

array[1] = 200;

console.log('arr1 : ', arr1);
console.log('arr2 : ', arr2);
console.log('arr3 : ', arr3);
