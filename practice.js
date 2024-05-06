const  Employee = [
    {
        EId : 302010,
        EName :"Sandhya",
        EeDesignation : "Associate",
    },
    {
        EId : 302011,
        EName :"Sharath",
        EDesignation : "HR",
    },
    {
        EId : 302012,
        EName :"Akira Nandhan",
        EDesignation : "Manager",
    },
    {
        EId : 302013,
        EName :"Aadrika",
        EDesignation : "Senior Associate",
    },
];
const fil = Employee.filter((Employee) => Employee.Ename == "Akira Nandhan");
console.log(fil); // filter the EId == 302013 details.
console.log(Employee.length); // display the  count
const user = Employee.find((Employee) => Employee.EId == 302011); // find EId = 302011 data 
console.log(user); //display the EId= 302011  total data
const Findex = Employee.findIndex((Employee) => Employee.EId == 302011);
console.log(user); //display the EId= 302011  total data

Employee.push(  //pushing new details to the previous one.
    {
        EId : 302014,
        EName :"Harshini",
        EDesignation : "Associate",
    },
);
console.log(Employee); //display whole data including push.
Employee.pop((Employee) => Employee.EeDesignation == "HR");
console.log(Employee);


