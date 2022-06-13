/*function recievesAFunction(callback){
    callback();
}

function returnsANamedFunction() {
    return function namedFunction(){
        console.log("before all")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("an anonymous function ")
    }
}*/

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFn() {
      console.log("this is a named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
  }