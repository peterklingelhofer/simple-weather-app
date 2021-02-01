import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import WeatherConditionsIcon from '../WeatherConditionsIcon/WeatherConditionsIcon';
import { kelvinToFahrenheit } from '../../../utils/temperatureConversion';
import { WeatherInterface } from '../../../shared/interfaces/weather';
import { RootStateInterface } from '../../../shared/interfaces/rootState';
import { darkTheme } from '../../../styles/theme';
import { tableStyles } from './styles';

export default function ForecastTable() {
  const classes = tableStyles();
  const { table } = classes;
  const forecast = useSelector((state: RootStateInterface) => state.weather);

  const forecastTableHead = (
    <TableHead>
      <TableRow>
        <TableCell>Datetime</TableCell>
        <TableCell align="right">Conditions</TableCell>
        <TableCell align="right">Temperature</TableCell>
        <TableCell align="right">Humidity</TableCell>
        <TableCell align="right">Pressure</TableCell>
        <TableCell align="right">Clouds</TableCell>
        <TableCell align="right">Wind speed</TableCell>
        <TableCell align="right">Wind degree</TableCell>
        <TableCell align="right">Description</TableCell>
      </TableRow>
    </TableHead>
  );

  const forecastTableBody = forecast.map((row: WeatherInterface) => {
    const {
      dt,
      temp,
      humidity,
      pressure,
      clouds,
      wind_speed: windSpeed,
      wind_deg: windDegree,
      weather,
    } = row;
    return (
      <TableBody key={dt.toString()}>
        <TableRow>
          <TableCell component="th" scope="row">
            {new Date(dt * 1000).toString()}
          </TableCell>
          <TableCell align="right">
            <WeatherConditionsIcon conditions={weather[0].description} />
          </TableCell>
          <TableCell align="right">{kelvinToFahrenheit(temp)}&deg;F</TableCell>
          <TableCell align="right">{humidity}%</TableCell>
          <TableCell align="right">{pressure} atm</TableCell>
          <TableCell align="right">{clouds}%</TableCell>
          <TableCell align="right">{windSpeed} m/s</TableCell>
          <TableCell align="right">{windDegree}&deg;</TableCell>
          <TableCell align="right">
            <span className="capitalize">{weather[0].description}</span>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
        <Table
          className={table}
          stickyHeader
          aria-label="weather forecast data table"
        >
          {forecastTableHead}
          {forecastTableBody}
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
