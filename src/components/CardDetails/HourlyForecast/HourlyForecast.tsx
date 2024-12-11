import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartOptions,
} from 'chart.js';
import { ClockIcon } from '@heroicons/react/20/solid';
import styles from './HourlyForecast.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface HourlyForecastProps {
  hourlyData: Array<{
    dt: number;
    main: { temp: number };
    wind: { speed: number };
    weather: [{ icon: string }];
  }>;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
  if (!hourlyData || hourlyData.length === 0) {
    return <p>No data available for hourly forecast.</p>;
  }

  const data = {
    labels: hourlyData.map((data) =>
      new Date(data.dt * 1000).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      })
    ),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: hourlyData.map((data) => data.main.temp),
        borderColor: '#f5a623',
        backgroundColor: 'rgba(245, 166, 35, 0.2)',
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const temperatureLabelPlugin = {
    id: 'temperatureLabel',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afterDatasetsDraw: (chart: any) => {
      const { ctx, data, scales } = chart;
      ctx.save();
      const dataset = data.datasets[0];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dataset.data.forEach((value: any, index: number) => {
        const x = scales.x.getPixelForValue(index);
        const y = scales.y.getPixelForValue(value);

        const text = `${Math.round(value)}°`;
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#FFF';
        ctx.textAlign = 'center';

        ctx.fillStyle = '#FFF';
        ctx.fillText(text, x, y - 15);
      });

      ctx.restore();
    },
  };

  const calculateYOffset = (index: number) => {
    const baseOffset = -20;
    const stepOffset = 20;
    return baseOffset + (index % 2 === 0 ? 0 : stepOffset);
  };

  return (
    <div className={styles.forecastContainer}>
      <h2 className={styles.title}>
        <ClockIcon className={styles.iconTitle} /> 24-Hour Forecast
      </h2>
      <div className={styles.graphContainer}>
        <Line data={data} options={options} plugins={[temperatureLabelPlugin]} />
      </div>
      <div className={styles.forecastItems}>
        {hourlyData.map((data, index) => (
          <div
            key={index}
            className={styles.forecastItem}
            style={{ transform: `translateY(${calculateYOffset(index)}px)` }}
          >
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather icon"
              className={styles.icon}
            />
            <div className={styles.windSpeed}>
              {data.wind.speed.toFixed(1)} km/h
            </div>
            <div className={styles.time}>
              {new Date(data.dt * 1000).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
