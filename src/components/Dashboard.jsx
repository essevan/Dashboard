import React, { useState, useEffect } from "react";
import {
  Line,
  Bar,
  Pie,
  Scatter,
  Chart as ChartComponent,
  Doughnut,
  PolarArea
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  Legend,
  defaults,
} from "chart.js/auto";
import { Chart } from "react-google-charts";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import { color } from "chart.js/helpers";
import { Label } from "recharts";
import Chat from './Chat';
import axios from "axios";

ChartJS.register(MatrixController, MatrixElement);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "white"

const Dashboard = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rec, setRec] = useState(null)
  const [isChatOpen, setIsChatOpen] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://34.233.124.110:8000/api/piechart');
        console.log('Data:', response.data.payload);
        setRec(response.data.payload)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const CityState = async () => {
      try {
        const response = await axios.get('http://34.233.124.110:8000/api/multigraphs');
        console.log('Data 22:', response);
        setRec(response.data.payload)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    CityState()
    fetchData();
  }, []);







  const waterfallData = {
    labels: ["Initial Amount", "Increase", "Decrease", "Final Amount"],
    datasets: [
      {
        label: "Waterfall",
        data: [5000, 2000, -1500, 5500],
        backgroundColor: ["#4C9FFB", "#4C9FFB", "#FF6384", "#36A2EB"],
      },
    ],
  };

  const waterfallOptions = {
    plugins: {
      title: {
        display: true,
        text: "Waterfall Chart",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
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

  const approvalDiffData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Approval Diff",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: "Initial vs Forgiveness Amount",
        data: [
          { x: 5000, y: 1000 },
          { x: 10000, y: 3000 },
          { x: 15000, y: 7000 },
          { x: 20000, y: 10000 },
        ],
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const heatmapData = {
    labels: {
      x: ["InitialApprovalAmount", "ForgivenessAmount", "UndisbursedAmount", "JobsReported"],
      y: ["InitialApprovalAmount", "ForgivenessAmount", "UndisbursedAmount", "JobsReported"]
    },
    datasets: [{
      label: 'Correlation Heatmap',
      data: [
        { x: 0, y: 0, v: 1 },
        { x: 0, y: 1, v: 0.8 },
        { x: 0, y: 2, v: 0.6 },
        { x: 0, y: 3, v: 0.4 },
        { x: 1, y: 0, v: 0.8 },
        { x: 1, y: 1, v: 1 },
        { x: 1, y: 2, v: 0.5 },
        { x: 1, y: 3, v: 0.3 },
        { x: 2, y: 0, v: 0.6 },
        { x: 2, y: 1, v: 0.5 },
        { x: 2, y: 2, v: 1 },
        { x: 2, y: 3, v: 0.2 },
        { x: 3, y: 0, v: 0.4 },
        { x: 3, y: 1, v: 0.3 },
        { x: 3, y: 2, v: 0.2 },
        { x: 3, y: 3, v: 1 }
      ],
      backgroundColor(context) {
        const value = context.dataset.data[context.dataIndex].v;
        const alpha = value * 0.8 + 0.2;
        return `rgba(255, 99, 132, ${alpha})`;
      },
      borderWidth: 1,
      width: ({ chart }) => (chart.chartArea || {}).width / 4 - 1,
      height: ({ chart }) => (chart.chartArea || {}).height / 4 - 1,
    }]
  };

  const candledata = [
    ["day", "a", "b", "c", "d"],
    ["Mon", 20, 28, 38, 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 50, 77, 66, 77],
    ["Fri", 15, 66, 22, 68],
  ];

  const candleoptions = {
    legend: "none",
    backgroundColor: "",
    color: "",
    title: "BoxPlot",
    titleTextStyle: {
      color: "white",
      // fontName: <string>,
      fontSize: 20,
      bold: true,
      // italic: <boolean> 
    },
    chartArea: { width: "90%", height: "80%" },
    hAxis: {
      textStyle: {
        color: '#90A3AF', // Change this to your desired color
      },
    },
    vAxis: {
      textStyle: {
        color: '#90A3AF', // Change this to your desired color
      },
    }
  };

  const difoptions = {
    legend: "none",
    backgroundColor: "",
    color: "white",
    title: "Bar Plot",
    titleTextStyle: {
      color: "white",
      // fontName: <string>,
      fontSize: 20,
      bold: true,
      // italic: <boolean> 
    },
    chartArea: { width: "90%", height: "80%" },
    hAxis: {
      textStyle: {
        color: '#90A3AF', // Change this to your desired color
      },
    },
    vAxis: {
      textStyle: {
        color: '#90A3AF', // Change this to your desired color
      },
    }
  };

  // Data for Yearly Fraud Analysis
  const fraudAnalysisData = {
    labels: ["1/1/2024", "2/1/2024", "3/1/2024", "4/1/2024", "5/1/2024", "6/1/2024", "7/1/2024", "8/1/2024", "9/1/2024", "10/1/2024", "11/1/2024", "12/1/2024"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 45],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Dataset 2",
        data: [15, 25, 20, 30, 25, 35, 30, 40, 35, 45, 40, 50],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Dataset 3",
        data: [5, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 40],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const barWithLineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        type: 'line',
        label: 'Line Dataset',
        data: [12, 25, 32, 45, 52, 65, 75, 85, 95, 105, 115, 125],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

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
        text: "Forgiveness Amount Over Time"
      }
    }

  };

  // const GData = [
  //   ["City", "Popularity"],
  //   ["Los Angeles, CA", 200],
  //   ["Houston, TX", 300],
  //   ["New York City, NY", 400],
  //   ["Miami, FL", 500],
  //   ["Chicago, IL", 600],
  //   ["Philadelphia, PA", 700]
  // ];

  const GData = [
    ["City", "Popularity"],
    ["Los Angeles, CA", 200],
    ["Houston, TX", 300],
    ["New York City, NY", 400],
    ["Miami, FL", 500],
    ["Chicago, IL", 600],
    ["Philadelphia, PA", 900]
  ];

  const GOptions = {
    region: "US",
    resolution: "metros",
    colorAxis: { colors: ["#e0f3f8", "#023858"] },
    backgroundColor: "",
    datalessRegionColor: "#fff",
    defaultColor: "#f5f5f5",
    title: "Popularity by City",
    titleTextStyle: {
      color: "white",
      fontSize: 20,
      bold: true,
    },
    chartArea: { width: "90%", height: "80%" },
    legend: { position: 'none' },
  };

  const doughnutData = {
    labels: ["LoanStatus", "RuralUrbanIndicator", "Label"],
    datasets: [
      {
        label: "LoanStatus",
        data: [835009, 133516, 7],
        backgroundColor: ["#004291", "#06917D", "#75A9F9"],
        // hoverBackgroundColor: ["#3A8DFF", "#75A9F9", "#A8D4FF"],
      },
      {
        label: "RuralUrbanIndicator",
        data: [823900, 144632],
        backgroundColor: ["#8C1C13", "#A14B28", "#3E5C76"],
        // hoverBackgroundColor: ["#FF5370", "#FF8299", "#FFA2B0"],
      },
      {
        label: "Label",
        data: [968437, 95],
        backgroundColor: ["#D1923C", "#257458", "#61497A"],
        // hoverBackgroundColor: ["#2A8BD6", "#92C7FF", "#B0D7FF"],
      },
    ],
  };

  const americaGeoData = [
    ["State", "Loan Applications"],
    ["California", 130616],
    ["Texas", 76183],
    ["New York", 74110],
    ["Florida", 60035],
    ["Illinois", 40813],
    ["Pennsylvania", 38535],
    ["Ohio", 32646],
    ["New Jersey", 32535],
    ["Michigan", 29802],
    ["Massachusetts", 27473],
    ["Georgia", 25832],
    ["Washington", 23754],
    ["Virginia", 23267],
    ["North Carolina", 22826],
    ["Colorado", 19742],
    ["Minnesota", 19729],
    ["Maryland", 18977],
    ["Wisconsin", 17353],
    ["Indiana", 16601],
    ["Missouri", 16350],
    ["Tennessee", 15869],
    ["Arizona", 15794],
    ["Louisiana", 13668],
    ["Oregon", 13456],
    ["Connecticut", 12892],
    ["Alabama", 10912],
    ["South Carolina", 10742],
    ["Oklahoma", 9997],
    ["Utah", 9294],
    ["Kentucky", 9179],
    ["Iowa", 8295],
    ["Nevada", 8262],
    ["Kansas", 8202],
    ["Arkansas", 5857],
    ["Nebraska", 5804],
    ["Mississippi", 5502],
    ["New Hampshire", 5078],
    ["Hawaii", 4980],
    ["New Mexico", 4485],
    ["Idaho", 4416],
    ["District of Columbia", 4399],
    ["Maine", 4185],
    ["Rhode Island", 3792],
    ["West Virginia", 3365],
    ["North Dakota", 3222],
    ["Montana", 3144],
    ["Delaware", 2996],
    ["Puerto Rico", 2952],
    ["South Dakota", 2695],
    ["Alaska", 2663],
    ["Vermont", 2269],
    ["Wyoming", 2139],
    ["Guam", 443],
    ["Virgin Islands", 290],
    ["Northern Mariana Islands", 82],
    ["American Samoa", 20],
    ["Unknown", 13]
  ];


  // Define the options for the map chart
  const americaGeoOptions = {
    region: "US",
    resolution: "provinces",
    colorAxis: { colors: ["#e0f3f8", "#023858"] },
    backgroundColor: "",
    datalessRegionColor: "#fff",
    defaultColor: "#f5f5f5",
    title: "Popularity by State",
    titleTextStyle: {
      color: "white",
      fontSize: 20,
      bold: true,
    },
    chartArea: { width: "90%", height: "80%" },
    legend: { position: 'none' },
  };

  const histogramOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Histogram Example',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Range',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency',
        },
      },
    },
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const lgbm = {
    labels:["CA", "TX", "NY", "FL", "IL", "PA", "OH", "NJ", "MI", "MA", "GA", "WA"],
    datasets: [
        {
            label: "Feature Importance",
            data: [130616, 76183, 74110, 60035, 40813, 38535, 32646, 32535, 29802, 27473, 25832, 23754],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
    ],
};


  return (
    <div className="p-8 min-h-screen text-white">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" className="bi bi-chat-text-fill fixed bottom-6 right-6" viewBox="0 0 16 16"
          onClick={() => setIsChatOpen(true)} >
          <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
        </svg>
      </button>
      <Chat isOpen={isChatOpen} onClose={closeChat} />


      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {['Cases Analysed', 'Fraud Detected', 'Defraud Amount', 'Cases Pending'].map((item, index) => (
          <div key={index} className="text-left py-2 px-4 rounded-[13px] bg-[#061536] flex flex-row h-[80px] justify-between items-center">
            <h1 className="md:font-semibold text-wrap text-sm pr-2">{item}</h1>
            <h2 className="md:font-semibold text-sm md:text-lg">{301668 + (index * 1000)}</h2>
          </div>
        ))}
      </div> */}


      {/* <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[400px] md:w-[100%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Line data={fraudAnalysisData}
            options={{
              plugins: {
                title: {
                  text: "Yearly Fraud Analysis"
                }
              }
            }} />
        </div>

      </div> */}


      <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[400px] md:w-[100%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          {rec &&
            <Pie
              data={{
                labels: rec.pie_records.pie_labels,
                datasets: [
                  {
                    data: rec.pie_records.pie_values,
                  }
                ]
              }}
              options={{
                plugins: {
                  title: {
                    display: true, // Make sure to display the title
                    text: "Loan Status Distribution"
                  },
                  legend: {
                    // display:false,
                    position: "right",
                    labels: {
                      boxWidth: 9, // Add this for better spacing of legend items
                      padding: 5 // Add this for better padding around legend items
                    }
                  }
                }
              }}
            />

          }
        </div>
      </div>


      {/* <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
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
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <ChartComponent
            type="matrix"
            data={heatmapData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Correlation Heatmap",
                },
              },
              scales: {
                x: {
                  type: "category",
                  labels: heatmapData.labels.x,
                },
                y: {
                  type: "category",
                  labels: heatmapData.labels.y,
                },
              },
            }}
          />
        </div>
      </div> */}

      {/* <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Scatter data={scatterData}
            options={{
              plugins: {
                title: {
                  text: "Initial vs Forgiveness Amount"
                }
              }
            }} />
        </div>
      </div> */}

      {/* <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[500px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          {rec &&
            <Line data={{
              labels: rec.line_chart_approval.labels,
              datasets: [
                {
                  label: "Approval Over Time",
                  data: rec.line_chart_approval.values,
                  borderColor: "rgba(153, 102, 255, 1)",
                  fill: false,
                },
              ],
            }}
              options={{
                plugins: {
                  title: {
                    text: "Approval Over Time"
                  }
                }
              }} />
          }
        </div>
        <div className="w-full h-[500px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          {rec &&
            <Line data={{
              labels: rec.line_chart_forgiveness.labels,
              datasets: [
                {
                  label: "Forgiveness Amount",
                  data: rec.line_chart_forgiveness.values,
                  borderColor: "rgba(153, 102, 255, 1)",
                  fill: false,
                },
              ],
            }}
              options={{
                plugins: {
                  title: {
                    text: "Forgiveness Amount Over Time"
                  }
                }
              }} />
          }
        </div>
      </div>*/}

      <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full flex flex-row h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] px-4 py-2">
          <div className="w-[30%] font-bold text-lg">State of Applicants</div>
          <div className="w-[70%]">
            <Chart
              chartType="GeoChart"
              data={americaGeoData}
              height="340px"
              width="100%"
              options={americaGeoOptions}
            />
          </div>
        </div>


        <div className="w-full h-[350px] md:w-[49%] mb-12 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Bar data={lgbm}
            options={{
              plugins: {
                title: {
                  text: "Borrowers State"
                }
              },
              indexAxis: 'y',
            }} />
        </div>

        {/* <div className="w-full flex flex-row h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] px-4 py-2">
          <div className="w-[30%]  font-bold">Cities of Applicants</div>
          <div className="w-[70%]">
            <Chart
              chartType="GeoChart"
              data={GData}
              height="340px"
              width="100%"
              options={GOptions}
            />
          </div>
        </div> */}
      </div> 

      {/* <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Bar data={borrowerStateData}
            options={{
              plugins: {
                title: {
                  text: "Loans by State"
                }
              },
            }} />
        </div>
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Bar data={barWithLineData}
            options={{
              plugins: {
                title: {
                  text: "Bar Chart with Line Overlay"
                }
              }
            }} />
        </div>
      </div> */}

      {/* <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Line data={gdata} options={goptions} />
        </div>

      </div> */}

      {/* <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Chart
            chartType="ColumnChart"
            data={candledata}
            height="340px"
            width="100%"
            options={difoptions}
          />
        </div>
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Line data={approvalDiffData}
            options={{
              plugins: {
                title: {
                  text: "Approval Diff Over Time"
                }
              }
            }} />
        </div>
      </div> */}

      {/* <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Bar
            data={waterfallData}
            options={waterfallOptions}
          />
        </div>

        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Chart
            chartType="CandlestickChart"
            data={candledata}
            height="340px"
            width="100%"
            options={candleoptions}
          />
        </div>
      </div> */}

      <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          {rec &&
            <Bar data={{
              labels: rec.histogram_initial.bins,
              datasets: [
                {
                  label: 'Histogram',
                  data: rec.histogram_initial.values,
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }} options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Histogram for Initials',
                },
              },
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Range',
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Frequency',
                  },
                },
              },
            }} />
          }
        </div>
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          {rec &&
            <Bar data={{
              labels: rec.histogram_forgiveness.bins,
              datasets: [
                {
                  label: 'Histogram',
                  data: rec.histogram_forgiveness.values,
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }} options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Histogram for forgiveness',
                },
              },
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Range',
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Frequency',
                  },
                },
              },
            }} />
          }
        </div>
      </div>

      <div className="flex flex-wrap justify-around mb-8">
        <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          {rec &&
            <Bar data={{
              labels: rec.histogram_proceed.bins,
              datasets: [
                {
                  label: 'Histogram',
                  data: rec.histogram_proceed.values,
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }} options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Histogram for Proceed',
                },
              },
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Range',
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Frequency',
                  },
                },
              },
            }} />
          }
        </div>

        {/* <div className="w-full h-[350px] md:w-[49%] mb-8 md:mb-0 bg-gradient-to-b from-[#0A2052] rounded-lg to-[#06173E] p-4">
          <Doughnut data={doughnutData} className="max-h-[300px]"
            options={{
              plugins: {
                title: {
                  text: "Verifications"
                }
              }
            }} />
        </div> */}
      </div>

      <div className="flex flex-wrap justify-around mb-8">
        
      </div>


    </div>


  );
};

export default Dashboard;
