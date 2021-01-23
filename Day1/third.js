//string in java script
let str = "Hello world";
let str1 = "Hello Again";

//very important : ES6
let str2 = `Hello Universe`;
console.log(str2);

// concatination
 let str3 = "String "+ str1 +" "+ str2;
 console.log(str3); 

 // concatination
 let str4 = `Stringtild ${str1}     ${str2}`;
 console.log(str4);

 //dynamic place holder :: ${var_name}
 let limit = 10;
 let start = 0;

 let url =
  "https://jsonplaceholder.typicode.com/posts?_start=" +
  start +
  "&_limit"+
  limit;
  console.log(url);
  
  let url1 = `https://jsonplaceholder.typicode.com/posts?_start=${start} &_limit=${limit}`;
  console.log(url);