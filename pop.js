let classroom = [
    {
        rollno: 1,
        standard: "tenth",
    },
    {
        rollno: 2,
        standard: "eight",
    },
];
classroom.pop((classroom) => classroom.rollno == 1);// pop
console.log(classroom); 
localStorage.setItem("classroom",JSON.stringify(classroom)); //arrays to string conversion.
const results = JSON.parse(localStorage.getItem("classroom")); 
results.push( // adding details (push)
    {
        rollno: 3,
        standard: "seventh",
    },
);
localStorage.setItem("results",JSON.stringify(results));
console.log(results);

