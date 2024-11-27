const dates = ["2024-5-10","2024-6-7","2024-8-24"];
const formattedDates = dates.map(formatDates);

document.getElementById("demo").innerHTML = formattedDates;

function formatDates(element){
const parts = element.split("-");
return `${parts[1]}/${parts[2]}/${parts[0]}`;
}