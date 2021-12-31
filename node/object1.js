let student = [
  { id: 0, name: "asd0", marks: { e: 12, p: 13, c: 10, m: 8 } },
  { id: 1, name: "asd1", marks: { e: 12, p: 13, c: 10, m: 8 } },
  { id: 2, name: "asd2", marks: { e: 12, p: 13, c: 10, m: 8 } },
];

const totalMarks = student.reduce((count, acc) => {}, 0);
// console.log(totalMarks);

//   student.forEach(ite);

//   function ite(item){
//     const { marks } = item;

//     let sum = 0;
//     let marks1 = Object.values(student.marks);
//     console.log(marks1);

// }

for (let std of student) {
  const arrayMarks = Object.values(std.marks);
  
  const total = arrayMarks.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;

  }, 0);

  std.total = total;

  // let sum = 0;
  // for(let mark of arrayMarks){
  //   if(mark && Number(mark)) sum = sum + mark;
  // }
  // std.total = sum;
}
console.log(student);
