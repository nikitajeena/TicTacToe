let obj = [
  {
    type: "sq",
    side: 4,
  },
  {
    type: "circle",
    radius: 3,
  },
];

let array = [];

function calcArea(object) {
  const { type, side, radius } = object;
  switch (type) {
    case "sq":
      let a = side;
      areaofsquare = a * a;
      temp = areaofsquare;
      array.push(areaofsquare);
      break;
    case "circle":
      let b = radius;
      let PIE = 3.14;
      areaofcircle = PIE * b * b;
      temp = areaofcircle;
      array.push(areaofcircle);
      break;
    default:
      console.log("wrong input");
  }
}

for (let item of obj) {
  calcArea(item);
}
console.log(array);







// function calculation(type, side){
//     if(area[0].type)
// let userinput = area[0].side;
// let value = userinput * userinput;
// console.log(value);

// }

// console.log("hi")

// for (let item of area) {
//   let a = iem.side;
//   let areaOfsquare = a * a;
//   console.log("hiii:::", areaOfsquare);

//   let b = item.radius;
//   let c = 3.14;
//   let areaofcircle = c * b * b;
//   console.log(areaofcircle);
// }

// function areaofcircle(){

//     let l = area[0].side;
//     console.log(l);

//   let areaOfsquare = l  * l ;
//   console.log("hiii:::", areaOfsquare);

// }
// // function areaofsquare(type, radius)
// function calculation(item){

//   item.map((variable) => {
//       if(type == "sq"){

//       }
//     })
// }
// }
