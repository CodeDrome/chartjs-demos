"use strict"


const app = {
    canvasContext: document.getElementById('chart').getContext('2d')
};


window.onload = () =>
{
    // bar();

    line();

    // pie();
}


function bar()
{
    const myChart = new Chart(app.canvasContext,
    {
        type: 'bar',
        data:
        {
            labels: chartData.countryPopulations.countries,
            datasets:
            [{
                data: chartData.countryPopulations.populations,
                backgroundColor: chartjsColors.backgroundColors,
                borderColor: chartjsColors.borderColors,
                borderWidth: 1
            }]
        },
        options:
        {
            plugins:
            {
                legend: { display: false, },
                title: { display: true, text: 'Population (millions)' }
            },
            indexAxis: 'y',
            scales: { y: { beginAtZero: true } }
        }
    });
}


function line()
{
    const data =
    {
        labels: chartData.LondonMonthlyTemperatures.months,
        datasets: [{
                    label: 'Max',
                    backgroundColor: chartjsColors.maxTempLine,
                    borderColor: chartjsColors.maxTempLine,
                    data: chartData.LondonMonthlyTemperatures.max,
                    borderWidth: 1,
                    tension: 0.4,
                   },
                   {
                    label: 'Min',
                    backgroundColor: chartjsColors.minTempLine,
                    borderColor: chartjsColors.minTempLine,
                    data: chartData.LondonMonthlyTemperatures.min,
                    borderWidth: 1,
                    tension: 0.4,
                    },]
    };

    const config =
    {
        type: 'line',
        data: data,
        options:
        {
            indexAxis: 'y',
            scales: { y: { beginAtZero: true } },
            plugins:
            {
                legend: { position: 'right', },
                title:
                {
                    display: true,
                    text: 'London Monthly Temperatures (\u00B0C)'
                }
            }
        }
    };

    var myChart = new Chart(app.canvasContext, config);
}


function pie()
{
    const data =
    {
        labels: chartData.countryAreas.countries,
        datasets: [{
                    data: chartData.countryAreas.areas,
                    backgroundColor: chartjsColors.backgroundColors,
                    borderColor: chartjsColors.borderColors,
                    borderWidth: 1
                  }]
    };

    const config =
    {
        // type: 'pie',
        type: 'doughnut',

        data: data,

        options:
        {
            plugins:
            {
                legend: { position: 'right', },
                title:
                {
                    display: true,
                    text: 'Country Areas (km\u00B2)'
                }
            }
        }
    };

    var myChart = new Chart(app.canvasContext, config);
}
