import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { kelvinToFahrenheit } from '../../../utils/temperatureConversion';
import { Forecast } from './types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ForecastTable() {
  const classes = useStyles();

  const forecast = useSelector((state: any) => state.weather);

  const forecastTableBody = forecast[0].hourly.map((row: Forecast) => {
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
          <TableCell align="right">{kelvinToFahrenheit(temp)}°F</TableCell>
          <TableCell align="right">{humidity}%</TableCell>
          <TableCell align="right">{pressure} atm</TableCell>
          <TableCell align="right">{clouds} %</TableCell>
          <TableCell align="right">{windSpeed} m/s</TableCell>
          <TableCell align="right">{windDegree}°</TableCell>
          <TableCell align="right">{weather[0].main}</TableCell>
          <TableCell align="right">{weather[0].description}</TableCell>
        </TableRow>
      </TableBody>
    );
  });

  const forecastTableHead = (
    <TableHead>
      <TableRow>
        <TableCell>Datetime</TableCell>
        <TableCell align="right">Temperature</TableCell>
        <TableCell align="right">Humidity</TableCell>
        <TableCell align="right">Pressure</TableCell>
        <TableCell align="right">Clouds</TableCell>
        <TableCell align="right">Wind speed</TableCell>
        <TableCell align="right">Wind degree</TableCell>
        <TableCell align="right">Weather</TableCell>
        <TableCell align="right">Description</TableCell>
      </TableRow>
    </TableHead>
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        {forecastTableHead}
        {forecastTableBody}
      </Table>
    </TableContainer>
  );
}
