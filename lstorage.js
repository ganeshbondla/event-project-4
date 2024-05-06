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
const test = JSON.stringify(schoolstudents);
console.log(test);
const test2 = JSON.parse(test);
console.log(test2);
localStorage.setItem("schoolstudents",JSON.stringify(schoolstudents));

test2.push({
    rollno:5,
    name:"Bujji",
    medium: "English",
    section: "D",
});
localStorage.setItem("schoolstudents", JSON.stringify(test2));