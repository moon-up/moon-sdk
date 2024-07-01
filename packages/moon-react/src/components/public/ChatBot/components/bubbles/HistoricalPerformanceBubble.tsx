import React from "react";
// import { Line } from "react-chartjs-2";
import { HistoricalPerformance } from "@/types";

interface Props {
  message: HistoricalPerformance;
}

const HistoricalPerformanceBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg">{message.token} Performance</h3>
    <div className="mt-4">
      {/* <Line
        data={{
          labels: message.data.map((d) => d.date.toLocaleDateString()),
          datasets: [
            {
              label: "Price",
              data: message.data.map((d) => d.price),
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        }}
      /> */}
    </div>
  </div>
);

export default HistoricalPerformanceBubble;
