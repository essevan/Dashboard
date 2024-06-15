import React, { useState, useEffect } from 'react';
// import { Chart } from "react-google-charts";
import {
    Line,
    Bar
} from "react-chartjs-2";
import {
    Chart as ChartJS,
    defaults,
} from "chart.js/auto";
import { HeatMapGrid } from "react-grid-heatmap";




const xLabels = new Array(3).fill(0).map((_, i) => `${i}`);
const yLabels = ["Sun", "Mon", "Tue"];
const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
        new Array(xLabels.length)
            .fill(0)
            .map(() => Math.floor(Math.random() * 5 + 5))
    );


const Models = () => {

    const gdata = {
        labels: [0.80, 0.85, 0.90, 0.95, 1.00],
        datasets: [
            {
                label: 'Light Blue Line',
                data: [1.00, 0.90, 0.85, 0.75, 0.50],
                borderColor: 'lightblue',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'Yellow Dashed Line',
                data: [1.00, 0.95, 0.80, 0.65, 0.50],
                borderColor: 'yellow',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false,
            }
        ]
    };

    const goptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.1)',
                    }
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.1)',
                    }
                }
            ],
            legend: {
                position: "left"
            }
        },
        plugins: {
            title: {
                // text: "Forgiveness Amount Over Time"
                display: false
            }
        }

    };


    const borrowerStateData = {
        labels: ["CA", "TX", "NY", "FL", "IL", "PA", "OH", "NC", "MI", "VA", "AZ", "WA", "MA", "TN"],
        datasets: [
            {
                label: "Number of Loans",
                data: [150, 200, 250, 220, 300, 205, 305, 260, 230, 159, 240, 225, 320, 200],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],
    };

    return (
        <div className="p-8 min-h-screen text-white ">
            <h1 className='text-white font-bold text-2xl mb-5 ml-2'>LightGBM</h1>
            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={gdata} options={goptions} />
                </div>
                <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={gdata} options={goptions} />
                </div>
            </div>

            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-12 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Bar data={borrowerStateData}
                        options={{
                            plugins: {
                                title: {
                                    text: "Loans by State"
                                }
                            },
                            indexAxis: 'y',
                        }} />
                </div>

                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-12 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <div>
                        <div className='flex flex-row justify-between mb-6'>
                            <div className='w-[40%]'>
                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                            <div className='w-[40%]'>

                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                        </div>


                        <div className='flex flex-row justify-between'>
                            <div className='w-[40%]'>
                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                            <div className='w-[40%]'>

                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <h1 className='text-white font-bold text-2xl pt-16 ml-2 '>Random Forest</h1>
            <div className="flex flex-wrap justify-around  mb-8">
                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-12 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <div>
                        <div className='flex flex-row justify-between mb-6'>
                            <div className='w-[40%]'>
                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                            <div className='w-[40%]'>

                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                        </div>


                        <div className='flex flex-row justify-between'>
                            <div className='w-[40%]'>
                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                            <div className='w-[40%]'>

                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-12 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Bar data={borrowerStateData}
                        options={{
                            plugins: {
                                title: {
                                    text: "Loans by State"
                                }
                            },
                            indexAxis: 'y',
                        }} />
                </div>
            </div>

            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={gdata} options={goptions} />
                </div>
                <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={gdata} options={goptions} />
                </div>
            </div>



            <h1 className='text-white font-bold text-2xl pt-16 ml-2'>XGBoost</h1>
            <div className="flex flex-wrap justify-around  mb-8">
                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-12 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <div>
                        <div className='flex flex-row justify-between mb-6'>
                            <div className='w-[40%]'>
                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: index % 2 ? "transparent" : "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                            <div className='w-[40%]'>

                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: index % 2 ? "transparent" : "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                        </div>


                        <div className='flex flex-row justify-between'>
                            <div className='w-[40%]'>
                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: index % 2 ? "transparent" : "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                            <div className='w-[40%]'>

                                <HeatMapGrid
                                    data={data}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
                                    // Reder cell with tooltip
                                    cellRender={(x, y, value) => (
                                        <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
                                    )}
                                    xLabelsStyle={index => ({
                                        color: index % 2 ? "transparent" : "#777",
                                        fontSize: ".65rem"
                                    })}
                                    yLabelsStyle={() => ({
                                        fontSize: ".65rem",
                                        textTransform: "uppercase",
                                        color: "#777"
                                    })}
                                    cellStyle={(_x, _y, ratio) => ({
                                        background: `rgb(185, 220, 255, ${ratio})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="3.2rem"
                                    xLabelsPos="bottom"
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                // yLabelsPos="right"
                                // square
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-12 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Bar data={borrowerStateData}
                        options={{
                            plugins: {
                                title: {
                                    text: "Loans by State"
                                }
                            },
                            indexAxis: 'y',
                        }} />
                </div>
            </div>

            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={gdata} options={goptions} />
                </div>
                <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={gdata} options={goptions} />
                </div>
            </div>




        </div>

    );
}

export default Models;
