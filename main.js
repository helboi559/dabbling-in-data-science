async function setup () {
//get data from json file
let res = await fetch('nflData.json')
let jsonInfo = await res.json();
console.log(jsonInfo)
//setup x/y axis for bar chart
let labels = [];
let heightData = [];

for(let info of jsonInfo) {
    //add data to chart
    if(info.draft_year === "2017" && info.draft_round === "1") {
        labels.push(info.name)
        heightData.push(info.weight)
    }
}
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: heightData,
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
setup();