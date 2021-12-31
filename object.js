const userData = [
  {
    id: 1,
    name: "foo",
  },
  {
    id: 2,
    name: "bar",
  },
];

const empData = [
  {
    id: 1,
    salary: 1000,
  },
  {
    id: 2,
    salary: 2000,
  },
  {
    id: 3,
    salary: 3000,
  },
];

let array = [];
for (let userinfo of empData) {
  let id = userinfo.id;
  //   console.log(id);

  const filterUser = userData.find((x) => x.id === id);
  if (filterUser) {
    temp = { ...userinfo, name: filterUser.name };
    array.push(temp);
  }
}

console.log(array);

/*
                    [
                        {id:1, name:'foo', salary: 1000},
                        ...
                    ]
                */

// const map = new Map(empData.map((userInfo) => [userInfo.id, userInfo]));

// const result = userData.map((userInfo) => ({ ...userInfo, salary: userInfo.salary || map.get(userInfo.id).salary  }));
// console.log(result);

// *************************************

// const newData = empData.map(item => {
//     const {id} = item;
//     const filteredUser = userData.find(x => x.id == id) || null;
//     if(filteredUser) return  {...item, name:filteredUser.name};
//     return;
// })

// console.log(newData.filter(x => x))
