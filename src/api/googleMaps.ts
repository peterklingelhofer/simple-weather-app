import GeolocationInterface from './shared/apiInterfaces';
const googleMapsAPI = 'https://maps.googleapis.com/maps/api/geocode';

// Get user's Zip Code
export async function geolocation(position: {
  coords: { latitude: number; longitude: number };
}) {
  if (navigator.geolocation) {
    const { coords } = position;
    const { latitude, longitude } = coords;
    const url = `${googleMapsAPI}/json?latlng=
      ${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    if (response.ok) {
      const res: GeolocationInterface = await response.json();
      const { results } = res;
      if (results[0].address_components[7].long_name !== undefined) {
        const zip = results[0].address_components[7].long_name;
        return zip;
      }
    } else {
      return '';
    }
  }
}

// Zip Code Validation
export async function fetchZipCodeValidation(zip: string) {
  const url = `${googleMapsAPI}/json?address=${zip}&sensor=true&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  const response = await fetch(url);
  if (response.ok) {
    const res: GeolocationInterface = await response.json();
    const { results } = res;
    const { address_components } = results[0];
    const validate =
      address_components.findIndex(
        (component: {
          long_name: string;
          short_name: string;
          types: string[];
        }) => {
          const { long_name, short_name, types } = component;
          return (
            (zip === long_name || zip === short_name) &&
            types[0] === 'postal_code'
          );
        },
      ) > -1;
    return validate;
  }
}
