const users= [
    {  
      id:1,
      name: "uday",
    },
    {
      id: 2,
      name: "ram",
    },
];
localStorage.setItem("users",JSON.stringify(users));
const results = JSON.parse(localStorage.getItem("users"));

results.push({
  id :3,
  name :"hari",
});
 
 localStorage.setItem("results",JSON.stringify(results));
 console.log(results);

  const user=results.find((results)=>results.id===3);
 console.log(user);

 console.log(users.length);
 
 let index=users.findIndex((users)=>users.name==="ram");
 console.log(index);

 let find= results.filter((results)=>results.id==2);
 console.log(find);

const dele= users.pop((users)=>users.id==2);
console.log(dele);
