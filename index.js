
// function receivesAFunction(callback) {
//     callback();
//   }
  
//   function returnsANamedFunction() {
//     return function namedFn() {
//       console.log("this is a named function");
//     };
//   }
  
//   function returnsAnAnonymousFunction() {
//     return () => console.log("this is an anonymous function");
//   }

function receivesAFunction(callback){
         callback()
}

function returnsANamedFunction(){
   return function namedFunction(){
    console.log("returns a named  function")
   }
}

function returnsAnAnonymousFunction(){
  return function (){
    console.log ("return anonymous Fxn")
  }
}