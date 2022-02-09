import React from 'react';
import { Bar } from "react-chartjs-2";
  
const Barchart =() => {
  return (
    <div className="App" style={{ width: "100%" }}>
      <h1>Department Wise Issues Charts</h1>
      <center><div style={{ width: "80%" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["Dry Walls", "Wall paint issues", "Floor Cracks", "Window Frame Change", "Wall cracks"],
            datasets: [
              {
                // Label for bars
                label: "total Issues",
                // Data or value of your each variable
                data: [1400, 1319, 613, 1400, 500],
                // Color of each bar
                backgroundColor: ["#b13a52", "#b13a52", "#b13a52", "#b13a52","#b13a52"],
                // Border color of each bar
                borderColor: ["#b13a52", "#b13a52", "#b13a52", "#b13a52","#b13a52"],
                borderWidth: 2


              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 2000,
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            
          }}
        />
      </div></center>
    </div>
  );
}
  
export default Barchart;