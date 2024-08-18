import React from 'react'
import { Line, Doughnut } from "react-chartjs-2"
import { 
    Chart as ChartJs,
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    ArcElement,
    Legend,
    LineElement,
    PointElement,
} from 'chart.js'
import { purple, purpleLight } from '../constants/color';
import { getLast7Days } from '../../lib/features';

ChartJs.register(
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    ArcElement,
    Legend,
    LineElement,
    PointElement,
);

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
    },
} 

const labels = getLast7Days();

const LineChart = ({ value }) => {
    const data = {
        labels,
        datasets: [{
            label: "Sample Line Data",
            data: value,
            backgroundColor: purpleLight,
            borderColor: purple,
            fill: false,
        }]
    };

    return (
        <Line data={data} options={lineChartOptions} />
    )
}

const doughnutChartOptions ={
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
    },
    cutout:100
}

const DoughnutChart = ({value,labels}) => {
    const data = {
        labels,
        datasets: [{
            label: 'Total chats vs chats',
            data: value,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)',
            ],
            borderWidth: 1,
            offset:20
        }]
    };

    return (
        <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions}/>
    )
}

export { 
    LineChart, DoughnutChart 
}
