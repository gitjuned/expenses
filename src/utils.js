export const chartSettings = {
  layout: {
    padding: {
      left: -100,
    },
  },
  title: {
    display: false,
  },
  labels: {
    display: false,
  },
  legend: {
    display: false,
  },

  scales: {
    xAxes: [
      {
        display: false,
        offset: false,
        gridLines: {
          color: "transparent",
          zeroLineWidth: 2,
          zeroLineColor: "white",
        },
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        display: true,
        offset: true,

        gridLines: {
          display: true,
          borderDash: [2, 4],
          color: "#77869e",
          z: 5,
        },
        ticks: {
          padding: -55,
          fontSize: 13,
          fontColor: "black",
          maxTicksLimit: 4,
          z: 1,
        },
      },
    ],
  },
  annotation: {
    annotations: [
      {
        type: "line",
        borderWidth: 1,
        mode: "vertical",
        scaleID: "x-axis-0",
        value: 4.5,
        borderColor: "#77869e",
      },
    ],
  },
};
