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
      const { results } = await response.json();
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
    const { results } = await response.json();
    const { address_components } = results[0];
    console.table(address_components);
    const index =
      address_components.findIndex(
        (component: { long_name: string; short_name: string }) => {
          const { long_name, short_name } = component;
          return zip === long_name || zip === short_name;
        },
      ) > -1;
    return index;
  }
}
