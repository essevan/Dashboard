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
import Chat from './Chat';



const Models = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);



    const xLabels = ["Fraud", "Not_Fraud"];
    const yLabels = ["Fraud", "Not_Fraud"];

    const gdata = {
        labels: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
        datasets: [
            {
                label: 'fpr',
                data: [[0, 0], [1, 1]],
                borderColor: 'lightblue',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'tpr',
                data: [[0.0, 0.0], [1, 0.94]],
                borderColor: 'plum',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false,
            }
        ]
    };

    const goptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 1,
                title: {
                    display: true,
                    text: 'True Positive Rate',
                    color: '#777',
                    font: {
                        size: 14
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#777',
                }
            },
            x: {
                beginAtZero: true,
                max: 1,
                title: {
                    display: true,
                    text: 'False Positive Rate',
                    color: '#777',
                    font: {
                        size: 14
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#777',
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
                labels: {
                    color: '#fff',
                }
            },
            title: {
                display: true,
                text: 'Receiver Operating Characteristic',
                color: '#fff',
                font: {
                    size: 16
                }
            }
        }
    };





    const lgr = {
        labels: ["NAICS Code", "Borrower Name", "Borrower Address", "Servicing Lender Location ID", "Originating Lender Location ID", "Payroll Proceed", "Borrower Zip", "Project Zip", "Proceed Per Job", "Rent Proceed"],
        datasets: [
            {
                label: "Feature Importance",
                data: [0.28055764317647236,
                    0.2193265368471227,
                    0.15342404008717406,
                    0.08830439434478882,
                    0.08774122301057506,
                    0.028687546690920985,
                    0.027654483538206463,
                    0.01600107684978114,
                    0.011649558381428497,
                    0.01157312853490388],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],
    };

    const rf = {
        labels: [
            "Current Approval Amount",
            "Payroll Proceed",
            "Total Proceed",
            "Initial Approval Amount",
            "Forgiveness Amount",
            "Borrower Zip",
            "CD",
            "Borrower State",
            "Project Zip",
            "Project State"
        ],
        datasets: [
            {
                label: "Feature Importance",
                data: [
                    0.1403207605921358,
                    0.13183008663769424,
                    0.12381005921513213,
                    0.09004898368761426,
                    0.06653261298120672,
                    0.054803404305507494,
                    0.05461771144625014,
                    0.052030409457180224,
                    0.04259550291239941,
                    0.03536175209233446
                ],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],
    };

    const dt = {
        labels: [
            "TOTAL_PROCEED",
            "BorrowerState",
            "ServicingLenderAddress",
            "BorrowerZip",
            "ProjectZip",
            "ForgivenessAmount",
            "ServicingLenderZip",
            "DateApproved",
            "LoanNumber",
            "SBAOfficeCode"
        ],
        datasets: [
            {
                label: "Feature Importance",
                data: [
                    0.8417473590280756,
                    0.0519498058124605,
                    0.03247075936488994,
                    0.03245827197430169,
                    0.02838251109639326,
                    0.01265527031657248,
                    0.0003328821734012112,
                    3.1402339052960796e-06,
                    0.0,
                    0.0
                ],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],
    };

    const xgb = {
        labels: [
            "CurrentApprovalAmount",
            "LoanNumber",
            "BorrowerAddress",
            "BorrowerZip",
            "ServicingLenderLocationID",
            "DateApproved",
            "BorrowerState",
            "JobsReported",
            "ForgivenessDate",
            "SBAOfficeCode"
        ],
        datasets: [
            {
                label: "Feature Importance",
                data: [
                    0.5723635536680426,
                    0.05363135209837052,
                    0.03875927211515493,
                    0.03595260517760769,
                    0.03503362831357265,
                    0.030814027835181956,
                    0.026590187976886153,
                    0.020274342657920254,
                    0.01986171092225288,
                    0.019397189623581754
                ],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],
    };

    const lgbm = {
        labels: [
            "ServicingLenderZip",
            "NAICSCode",
            "PROCEED_Per_Job",
            "DateApproved / LoanStatusDate",
            "LoanNumber",
            "NotForgivenAmount",
            "FranchiseName",
            "RENT_PROCEED",
            "ForgivenessAmount",
            "ProjectCountyName"
        ],
        datasets: [
            {
                label: "Feature Importance",
                data: [
                    0.08559010364426613,
                    0.08191240387830157,
                    0.05015045135406219,
                    0.04981611501170177,
                    0.04680708793045804,
                    0.041123370110330994,
                    0.037111334002006016,
                    0.0367769976596456,
                    0.03343363423604146,
                    0.027415580073553995
                ],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],
    };

    const cardsInfo = [
        {
            name: 'Accuracy',
            val1: '0.999',
            val2: "0.999",
            val3: "0.999",
            val4: ' 0.999'
        },
        {
            name: "Precision",
            val1: '0.168',
            val2: '1.0',
            val3: '0.0',
            val4: '1.0'
        },
        {
            name: "Recall",
            val1: '1.0',
            val2: '0.944',
            val3: '0.0',
            val4: '0.833'
        },
        {
            name: "F1 Score",
            val1: '0.288',
            val2: '0.971',
            val3: '0.0',
            val4: ' 0.909'
        }
    ]

    const closeChat = () => {
        setIsChatOpen(false);
    };

    return (
        <div className="p-8 min-h-screen text-white ">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-chat-text-fill fixed bottom-6 right-6" viewBox="0 0 16 16"
                    onClick={() => setIsChatOpen(true)} >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                </svg>
            </button>
            <Chat isOpen={isChatOpen} onClose={closeChat} />
            <h1 className='text-white font-bold text-2xl mb-5 ml-2'>LightGBM</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {cardsInfo.map((item, index) => (
                    <div key={index} className="text-left py-2 px-4 rounded-[13px] bg-[#061536] flex flex-row h-[70px] justify-between items-center">
                        <h1 className="md:font-semibold text-wrap text-sm pr-2">{item.name}</h1>
                        <h2 className="md:font-semibold text-sm md:text-lg">{item.val1}</h2>
                    </div>
                ))}
            </div>


            <div className="flex flex-wrap justify-around mb-4">
                <div className="w-full h-[400px] md:w-[49%] mb-12 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Bar data={lgbm}
                        options={{
                            plugins: {
                                title: {
                                    text: "Feature Importance"
                                }
                            },
                            indexAxis: 'y',
                        }} />
                </div>

                <div className="w-full h-[400px] md:w-[49%] mb-12 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <div className=" text-center  items-center">
                        <h7 className="pr-5">Actual Values</h7>
                        <div className="flex items-center">

                            <div className="flex items-center justify-center h-full w-4">
                                <span className="transform -rotate-90 whitespace-nowrap font-light">Predicted Values</span>
                            </div>
                            <div className="w-[100%]">
                                <HeatMapGrid
                                    data={[[193597, 89],
                                    [0, 18]]}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
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
                                        background: `rgba(185, 220, 255, ${Math.max(ratio, 0.2)})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="10rem"
                                    xLabelsPos="bottom"
                                    square
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={{
                        labels: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
                        datasets: [
                            {
                                label: 'fpr',
                                data: [[0, 0], [0.04, 0.6],[0.28,0.9],[1,0.9]],
                                borderColor: 'lightblue',
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: 'tpr',
                                data: [[0, 0], [1, 1]],
                                borderColor: 'plum',
                                borderDash: [5, 5],
                                borderWidth: 2,
                                fill: false,
                            }
                        ]
                    }} options={goptions} />
                </div>
            </div>



            <h1 className='text-white font-bold text-2xl pt-16 ml-2 mb-4'>Random Forest</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {cardsInfo.map((item, index) => (
                    <div key={index} className="text-left py-2 px-4 rounded-[13px] bg-[#061536] flex flex-row h-[70px] justify-between items-center">
                        <h1 className="md:font-semibold text-wrap text-sm pr-2">{item.name}</h1>
                        <h2 className="md:font-semibold text-sm md:text-lg">{item.val2}</h2>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-around  mb-8">
                <div className="w-full h-[400px] md:w-[49%] mb-12 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <div className=" text-center  items-center">
                        <h7 className="pr-5">Actual Values</h7>
                        <div className="flex items-center">

                            <div className="flex items-center justify-center h-full w-4">
                                <span className="transform -rotate-90 whitespace-nowrap font-light">Predicted Values</span>
                            </div>
                            <div className="w-[100%]">
                                <HeatMapGrid
                                    data={[[193686, 0],
                                    [1, 17]]}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
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
                                        background: `rgba(185, 220, 255, ${Math.max(ratio, 0.2)})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="10rem"
                                    xLabelsPos="bottom"
                                    square
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Bar data={rf}
                        options={{
                            plugins: {
                                title: {
                                    text: "Feature Importance"
                                }
                            },
                            indexAxis: 'y',
                        }} />
                </div>
            </div>

            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={{
                        labels: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
                        datasets: [
                            {
                                label: 'fpr',
                                data: [[0, 0], [0, 0.45],[1,1]],
                                borderColor: 'lightblue',
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: 'tpr',
                                data: [[0, 0], [1, 1]],
                                borderColor: 'plum',
                                borderDash: [5, 5],
                                borderWidth: 2,
                                fill: false,
                            }
                        ]
                    }} options={goptions} />
                </div>
            </div>



            <h1 className='text-white font-bold text-2xl pt-16 ml-2 mb-6'>XGBoost</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {cardsInfo.map((item, index) => (
                    <div key={index} className="text-left py-2 px-4 rounded-[13px] bg-[#061536] flex flex-row h-[70px] justify-between items-center">
                        <h1 className="md:font-semibold text-wrap text-sm pr-2">{item.name}</h1>
                        <h2 className="md:font-semibold text-sm md:text-lg">{item.val2}</h2>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-around  mb-8">
                <div className="w-full h-[400px] md:w-[49%] mb-12 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <div className=" text-center  items-center">
                        <h7 className="pr-5">Actual Values</h7>
                        <div className="flex items-center">

                            <div className="flex items-center justify-center h-full w-4">
                                <span className="transform -rotate-90 whitespace-nowrap font-light">Predicted Values</span>
                            </div>
                            <div className="w-[100%]">
                                <HeatMapGrid
                                    data={[[193686, 0],
                                    [1, 17]]}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
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
                                        background: `rgba(185, 220, 255, ${Math.max(ratio, 0.2)})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="10rem"
                                    xLabelsPos="bottom"
                                    square
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Bar data={xgb}
                        options={{
                            plugins: {
                                title: {
                                    text: "Feature Importance"
                                }
                            },
                            indexAxis: 'y',
                        }} />
                </div>
            </div>

            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={{
                        labels: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
                        datasets: [
                            {
                                label: 'fpr',
                                data: [[0, 0], [0, 0.72],[0.03,0.83],[0.32,0.91],[0.51,0.94],[1,1]],
                                borderColor: 'lightblue',
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: 'tpr',
                                data: [[0, 0], [1, 1]],
                                borderColor: 'plum',
                                borderDash: [5, 5],
                                borderWidth: 2,
                                fill: false,
                            }
                        ]
                    }} options={goptions} />
                </div>
            </div>


            <h1 className='text-white font-bold text-2xl pt-16 ml-2 mb-4'>Logistic Regression</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {cardsInfo.map((item, index) => (
                    <div key={index} className="text-left py-2 px-4 rounded-[13px] bg-[#061536] flex flex-row h-[70px] justify-between items-center">
                        <h1 className="md:font-semibold text-wrap text-sm pr-2">{item.name}</h1>
                        <h2 className="md:font-semibold text-sm md:text-lg">{item.val3}</h2>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-around  mb-8">
                <div className="w-full h-[400px] md:w-[49%] mb-12 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <div className=" text-center  items-center">
                        <h7 className="pr-5">Actual Values</h7>
                        <div className="flex items-center">

                            <div className="flex items-center justify-center h-full w-4">
                                <span className="transform -rotate-90 whitespace-nowrap font-light">Predicted Values</span>
                            </div>
                            <div className="w-[100%]">
                                <HeatMapGrid
                                    data={[[193685, 1],
                                    [18, 0]]}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
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
                                        background: `rgba(185, 220, 255, ${Math.max(ratio, 0.2)})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="10rem"
                                    xLabelsPos="bottom"
                                    square
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Bar data={lgr}
                        options={{
                            plugins: {
                                title: {
                                    text: "Feature Importance"
                                }
                            },
                            indexAxis: 'y',
                        }} />
                </div>
            </div>

            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={{
                        labels: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
                        datasets: [
                            {
                                label: 'fpr',
                                data: [[0, 1], [0, 0],[1,0]],
                                borderColor: 'lightblue',
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: 'tpr',
                                data: [[0, 0], [1, 1]],
                                borderColor: 'plum',
                                borderDash: [5, 5],
                                borderWidth: 2,
                                fill: false,
                            }
                        ]
                    }} options={goptions} />
                </div>
            </div>


            <h1 className='text-white font-bold text-2xl pt-16 ml-2 mb-4'>Decision Tree Classifier</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {cardsInfo.map((item, index) => (
                    <div key={index} className="text-left py-2 px-4 rounded-[13px] bg-[#061536] flex flex-row h-[70px] justify-between items-center">
                        <h1 className="md:font-semibold text-wrap text-sm pr-2">{item.name}</h1>
                        <h2 className="md:font-semibold text-sm md:text-lg">{item.val4}</h2>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-around  mb-8">
                <div className="w-full h-[400px] md:w-[49%] mb-12 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <div className=" text-center  items-center">
                        <h7 className="pr-5">Actual Values</h7>
                        <div className="flex items-center">

                            <div className="flex items-center justify-center h-full w-4">
                                <span className="transform -rotate-90 whitespace-nowrap font-light">Predicted Values</span>
                            </div>
                            <div className="w-[100%]">
                                <HeatMapGrid
                                    data={[[193686, 0],
                                    [3, 15]]}
                                    xLabels={xLabels}
                                    yLabels={yLabels}
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
                                        background: `rgba(185, 220, 255, ${Math.max(ratio, 0.2)})`,
                                        fontSize: ".7rem",
                                        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
                                    })}
                                    cellHeight="10rem"
                                    xLabelsPos="bottom"
                                    square
                                    onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[400px] md:w-[49%] mb-8 mt-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Bar data={dt}
                        options={{
                            plugins: {
                                title: {
                                    text: "Feature Importance"
                                }
                            },
                            indexAxis: 'y',
                        }} />
                </div>
            </div>

            <div className="flex flex-wrap justify-around mb-8">
                <div className="w-full h-[350px] md:w-[49%] mb-4 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
                    <Line data={{
                        labels: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
                        datasets: [
                            {
                                label: 'fpr',
                                data: [[0, 0], [0, 0.28],[1,1]],
                                borderColor: 'lightblue',
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: 'tpr',
                                data: [[0, 0], [1, 1]],
                                borderColor: 'plum',
                                borderDash: [5, 5],
                                borderWidth: 2,
                                fill: false,
                            }
                        ]
                    }} options={goptions} />
                </div>
            </div>

        </div>

    );
}

export default Models;
