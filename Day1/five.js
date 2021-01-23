//boolean variable
let a1 = false;
a1 = true;
console.log(a1,typeof a1);

if(a1){
    console.log("I am true");
}
else{
    console.log("I am false");
}

// last will be printed...
var a2 =true;
var a2 = 5; 
if(a2){
    console.log("I might be true, but i am number "+a2);
}

// let a3 = '';
let a3 = "";
if (a3) {
  console.log("I am string, will i execute this block...!!");
}