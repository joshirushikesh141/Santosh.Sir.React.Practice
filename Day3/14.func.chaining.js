let rushabh = () =>{
    console.log("Hi Kajal");
}
console.log(rushabh());

function Hello() {
    this.sayHi = () => {
      console.log("Hi");
      return this;
    };
  
    this.sayHello = () => {
      console.log("Hello");
      return this;
    };
  }
  
  let ref = new Hello();
  ref.sayHello();
  ref.sayHi();
  ref.sayHi().sayHello();

  console.log(typeof ref.sayHi());