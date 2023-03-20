marks=prompt("Input your grade:");


function calculateGrade(marks){
if (marks <=100 && marks>=79){
    console.log("A");
}
else if (marks >=60 && marks<=79){
    console.log("B");
}
else if (marks >=49 && marks<=59){
    console.log("C");
}
else if (marks >=40 && marks<=49){
    console.log("D");
}
else {
    console.log("E");
}


}

calculateGrade(marks);