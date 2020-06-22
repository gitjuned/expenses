import React, { Component } from "react";
import "./App.scss";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-annotation";
import { chartSettings } from "./utils";
import NextIcon from "./assets/icons/next.svg";
import UpIcon from "./assets/icons/up-arrow.svg";
import DownIcon from "./assets/icons/down-arrow.svg";
import DownChevron from "./assets/icons/down-chevron.svg";
import ShoppingIcon from "./assets/icons/cart.svg";
import FuelIcon from "./assets/icons/fuel.svg";

// const chartSettings = {
//   layout: {
//     padding: {
//       left: -100,
//     },
//   },
//   title: {
//     display: false,
//   },
//   labels: {
//     display: false,
//   },
//   legend: {
//     display: false,
//   },

//   scales: {
//     xAxes: [
//       {
//         display: false,
//         offset: false,
//         gridLines: {
//           color: "transparent",
//           zeroLineWidth: 2,
//           zeroLineColor: "white",
//         },
//         ticks: {
//           display: false,
//         },
//       },
//     ],
//     yAxes: [
//       {
//         display: true,
//         offset: true,

//         gridLines: {
//           display: true,
//           borderDash: [2, 4],
//           color: "#77869e",
//           z: 5,
//         },
//         ticks: {
//           padding: -55,
//           fontSize: 13,
//           fontColor: "black",
//           maxTicksLimit: 4,
//           z: 1,
//         },
//       },
//     ],
//   },
//   annotation: {
//     annotations: [
//       {
//         type: "line",
//         borderWidth: 1,
//         mode: "vertical",
//         scaleID: "x-axis-0",
//         value: 4.5,
//         borderColor: "#77869e",
//       },
//     ],
//   },
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.myCanvas = React.createRef();
    this.state = {
      data: {},
      cardBalanace: null,
      spending: [],
      chartData: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
      },
    };
  }

  componentDidMount() {
    const canvas = this.myCanvas.current.chartInstance.canvas.getContext("2d");
    const redGradient = canvas.createLinearGradient(0, 0, 0, 410);
    redGradient.addColorStop(0, "#f24750");
    redGradient.addColorStop(1, "white");

    const greenGradient = canvas.createLinearGradient(0, 0, 0, 410);
    greenGradient.addColorStop(0, "#4df1a1");
    greenGradient.addColorStop(1, "white");

    fetch("https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    this.setState({
      chartData: {
        ...this.state.chartData,
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            borderColor: "#f24750",
            pointStyle: "circle",
            pointRadius: 4,
            borderWidth: 2,
            pointBackgroundColor: "white",
            fill: true,
            backgroundColor: redGradient,
          },
          {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            borderColor: "#4df1a1",
            pointStyle: "circle",
            pointRadius: 4,
            borderWidth: 2,
            pointBackgroundColor: "white",
            fill: true,
            backgroundColor: greenGradient,
          },
        ],
      },
    });
  }
  render() {
    return (
      <main>
        <div className="title flex padding-25">
          <h6>Expenses</h6>
          <span>icon</span>
        </div>

        <div className="balance padding-25">
          <div className="flex row1 ">
            <p>Card Balance</p>
            <div className="flex right-content">
              <img src={UpIcon} alt="up arrow" />
              <h6>$3,214</h6>
            </div>
          </div>

          <div className="flex row2">
            <h5>$6,390</h5>
            <div className="flex right-content">
              <img src={DownIcon} alt="down arrow" />
              <h6>$1,168</h6>
            </div>
          </div>
        </div>

        <div className="filters">
          <button className="filter-dd-btn">
            Monthly
            <span>
              <img src={DownChevron} alt="down chevron" />
            </span>
          </button>
          <div className="options">
            <button className="active-btn">Jan</button>
            <button>Feb</button>
            <button>Mar</button>
            <button>Apr</button>
            <button>May</button>
            <button>Jun</button>
            <button>Jul</button>
            <button>Aug</button>
            <button>Sep</button>
            <button>Oct</button>
            <button>Nov</button>
            <button>Dec</button>
          </div>
        </div>

        <div className="chart-wrapper">
          {/* <div className="ticks-wrapper">
            <p className="tick">6000</p>
            <p className="tick">4000</p>
            <p className="tick">2000</p>
            <p className="tick">0</p>
          </div> */}
          <Line
            width={100}
            height={100}
            ref={this.myCanvas}
            data={this.state.chartData}
            options={chartSettings}
          />
          <div className="days padding-25 flex">
            <button>01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button className="active">05</button>
            <button>06</button>
            <button>07</button>
            <button>08</button>
            <button>09</button>
          </div>
        </div>

        <div className="breakdown padding-25">
          <h4>Spending Breakdown</h4>
          <div className="category">
            <img className="icon" src={ShoppingIcon} alt="Shopping Icon" />

            <div className="details">
              <p>Shopping</p>
              <h6>17 Monday January</h6>
            </div>
            <h5>- $279,90</h5>
          </div>

          <div className="category">
            <img className="icon green-ico" src={FuelIcon} alt="Fuel Icon" />
            <div className="details">
              <p>Shell</p>
              <h6>17 Monday June</h6>
            </div>
            <h5>- $279,90</h5>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
