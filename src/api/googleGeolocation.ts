export async function geolocation(position: {
  coords: { latitude: number; longitude: number };
}) {
  if (navigator.geolocation) {
    const { coords } = position;
    const { latitude, longitude } = coords;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=
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
