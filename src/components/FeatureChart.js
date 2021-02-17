import React, { useState, useEffect } from "react";
import "../css/Track.css";
import Chart from 'chart.js';

const FeatureChart = (features) => {
    const [dataset, setDataset] = useState();

    const averageFeature = (attribute) => {
        return (features.data.map(f => f ? f[attribute] : 0).reduce((a, b) => a + b, 0) / features.data.length).toFixed(4);
    }    
    
    const createChart = () => {
        const ctx = document.getElementById('chart');
        new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Acousticness', 'Danceability', 'Energy', 'Positivity', 'Liveness', 'Speechiness', 'Instrumentalness'],
                datasets: [{
                    label: '',
                    data: dataset,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(104, 132, 245, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(104, 132, 245, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Audio Features',
                    fontSize: 16,
                    fontFamily: 'Heebo',
                    fontColor: '#ffffff',
                    padding: 30,
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'rgba(255, 255, 255, 0.3)',
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    useEffect(() => {
        let data = [];
        data.push(parseFloat(averageFeature("acousticness")));
        data.push(parseFloat(averageFeature("danceability")));
        data.push(parseFloat(averageFeature("energy")));
        data.push(parseFloat(averageFeature("valence")));
        data.push(parseFloat(averageFeature("liveness")));
        data.push(parseFloat(averageFeature("speechiness")));
        data.push(parseFloat(averageFeature("instrumentalness")));
        setDataset(data);
    }, []);

    useEffect(() => {     
        createChart();
    }, [dataset])

    return (
        <canvas id="chart" width="400" height="400" />
    );
}

export default FeatureChart;