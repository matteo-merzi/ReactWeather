// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// })
//
// names.forEach((name) => {
//   console.log('=>', name);
// })
//
// names.forEach((name) => console.log('=>', name))

var returnMe = (a) => a + '!'

console.log(returnMe('Matteo'));

function add(a, b) {
	return a + b;
}

var newAdd = (a, b) => a + b;
console.log(newAdd(1, 3));
var newAdd2 = (a, b) => {
	return a + b;
}
console.log(newAdd2(1, 3));
