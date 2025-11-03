import React from 'react';
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS, 
        Title,
        Tooltip,
        Legend,
        ArcElement,

        } from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const PieChart = ({ data, options }) => {
    return <Pie options={options} data={data} />
};

export default PieChart;