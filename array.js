let users = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "jane",
  },
];
//length
//find
//findIndex
//filter
//push
//pop
const remains = users.filter((user) => user.id !== 1);

console.log(remains[0]);
