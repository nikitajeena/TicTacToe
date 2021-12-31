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
//   let array = [];
  function calcArea(object) {
    const { type, side, radius } = object;
    switch (type) {
      case "sq":
        let a = side;
        areaofsquare = a * a;
        return  areaofsquare;
      case "circle":
        let b = radius;
        let PIE = 3.14;
        areaofcircle = PIE * b * b;
        return areaofcircle;
        
      default:
        console.log("wrong input");
    }
  }
  
const areaOutput = obj.map(calcArea)
console.log(areaOutput);