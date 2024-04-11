const Square = require ('./square_cjs').Square;
const PI = require ('./square_cjs').PI;

const mySquare = new Square(6);

console.log(`Area: ${mySquare.area()}`);
console.log(`PI= ${PI}`);

function test() {
  return new Promise((resolve, reject) => {
    if (Boolean((new Date()).getSeconds()%2)){
      resolve("SUCCESS");
    } else {
      reject("ERROR");
    }
  });
}

test().then((res) => {
  console.log(res);
}).catch((err) =>{
  console.log(err);
}).finally(() => {
  console.log("func test called");
});


