const students = ["Chenu","Thiveiyn","Resandi","Chaavi"];
const stuUpper = students.map(UpperCase);

document.getElementById("demo").innerHTML = stuUpper;

function UpperCase(element){
    return element.toUpperCase();
}

const stuLower =students.map(LowerCase);

document.getElementById("demo2").innerHTML = stuLower;

function LowerCase(element){
    return element.toLowerCase();
}