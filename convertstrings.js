const  schoolstudents = [
    {
        rollno: 1,
        name: "Sandhya",
        medium: "English",
        section: "D",
    },
    {
        rollno: 2,
        name: "Aadrika",
        medium: "Telugu",
        section: "C",
    },
    {
        rollno:3,
        name:"Akira nandhan",
        medium: "urdu",
        section: "A+"
    },
    {
        rollno:4,
        name:"Sharath Kumar",
        medium: "English",
        section: "B",
    },
];
console.log(schoolstudents);
console.log(schoolstudents.length); //it displays the count
localStorage.setItem("schoolstudents",JSON.stringify(schoolstudents)); //arrays to string conversion.
const results = JSON.parse(localStorage.getItem("schoolstudents")); //assigned string values to results to change in parse.
console.log(results); //it prints without strings.
// add one more data to the  previous data using push.
results.push ({
    rollno: 5,
    name:"Saichakra",
    medium: "English",
    section: "c",

});
localStorage.setItem("results",JSON.stringify(results)); //display including push data.





