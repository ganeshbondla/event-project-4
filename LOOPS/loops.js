/*print 0-10 numbers */
const number = 10;
for(i=0; i<=number; i++){
    console.log(i);
}

/*prints 0-9 numbers */
for(let i=0; i<10; i++){
    console.log(i);
}
/*prints today is Tuseday remaining is otherday */
const array=["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
for(let i=0; i<=array.length; i++){
    if(array[i] == "Sunday"){
        console.log("Today is Tuseday");
    }else{
        console.log("other day");
    }
}

/*SWITCH CASES*/
const nameIs = "Sharath";
switch(nameIs){
    case "Sharath":
        console.log("Hey Sharath");
        break;
    case "Sandhya":
        console.log("Hey Sandhya");
        break;
    default:
        console.log("Nothing");
}

/*using CONTINUE */
const arrays=["A","B","C","D","E"];
for(let i=0;i<arrays.length; i++){
    if(arrays[i] == "D"){
        continue;
    }else{
        console.log("remaining");
    }
}
