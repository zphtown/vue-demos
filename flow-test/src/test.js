/*@flow*/

//
// function foo(x) {
//   return x.split(' ');
// };
//
// // foo('Hello World!');
// foo(false);



// function stringLength (str) {
//   return str.length;
// }
//
// var length = stringLength(null);
//


// function stringLength (str) {
//   if (str !== null) {
//     return str.length;
//   }
//
//   return 0;
// }
//
// var length = stringLength(null);



// function foo(x : number, y : number) : number{
//   return x + y;
// }
//
// foo(1, 42);


//
// function foo(value: {foo? : string}) {
//
// }
// foo({foo: '2'})
// import './flow.js'

declare type Dictionary<T> = { [key: string]: T }


//
function foo(value: Dictionary) {

}

foo([{key: 1}])
