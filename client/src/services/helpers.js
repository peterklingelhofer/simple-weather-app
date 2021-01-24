import axios from 'axios';

// Get weather forecast with coordinates
export async function getWeatherByCoordinates(
  lat,
  lng,
  zip,
  newZipCodes,
  newZipCode,
  zipCodes, setZipCodes, storedZipCodes, length
) {
  await axios
    .get(`coordinates/${lat}/${lng}`)
    .then((response) => {
      const { data } = response;
      if (length === undefined) {
        const index = newZipCodes.findIndex((location) => location.zip === zip);
        const updatedZipCodes = newZipCodes;
        updatedZipCodes[index].forecast = data;
        setZipCodes(updatedZipCodes);
      } else {
        newZipCode.forecast = data;
        storedZipCodes.push(newZipCode);
        // Set state after all forecasts from database-stored locations have been retrieved
        if (storedZipCodes.length === length) {
          setZipCodes(storedZipCodes);
        }
      }
    })
    .catch((err) => console.log(err));
}

export async function getWeatherByZipCode(zip, zipCodes, setZipCodes, storedZipCodes, length) {
  debugger;
  // Get current weather conditions with Zip Code
  await axios
    .get(`zipcode/${zip}`)
    .then((response) => {
      const { data } = response;
      const { coord, name, weather, main } = data;
      const { temp } = main;
      const currentConditions = weather[0].description;
      const { lat, lon } = coord;
      const newZipCodes = [...zipCodes, { zip, name, currentConditions, temp }];
      const newZipCode = { zip, name, currentConditions, temp };
      // Now that we have coordinates, we can request the forecast
      getWeatherByCoordinates(lat, lon, zip, newZipCodes, newZipCode, zipCodes, setZipCodes, storedZipCodes, length);
    })
    .catch((err) => console.log(err));
}

// Add a new zip code location to the list
export async function addZipCode(zip, zipCodes, setZipCodes, storedZipCodes, length) {
  if (zipCodes.findIndex((location) => location.zip === zip) < 0) {
    getWeatherByZipCode(zip, zipCodes, setZipCodes, storedZipCodes, undefined);
    const newZipCodes = [...zipCodes, { zip }];
    setZipCodes(newZipCodes);
    await axios.post(`location/${zip}`).catch((err) => console.log(err));
  }
}

// Remove a zip code location from the list
export async function removeZipCode(zip, zipCodes, setZipCodes) {
  const newZipCodes = [...zipCodes];
  const index = newZipCodes.findIndex((location) => location.zip === zip);
  newZipCodes.splice(index, 1);
  setZipCodes(newZipCodes);
  await axios.delete(`location/${zip}`).catch((err) => console.log(err));
}
