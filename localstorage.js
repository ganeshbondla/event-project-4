const users = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "jane",
  },
];

localStorage.setItem("users", JSON.stringify(users));

const results = JSON.parse(localStorage.getItem("users"));

results.push({
  id: 3,
  name: "john",
});

localStorage.setItem("users", JSON.stringify(results));
