import React from 'react';
import { ReactComponent as ThunderstormIcon } from '../../../assets/weatherIcons/thunderstorm.svg';
import { ReactComponent as RainIcon } from '../../../assets/weatherIcons/rain.svg';
import { ReactComponent as HeavyRainIcon } from '../../../assets/weatherIcons/heavy-rain.svg';
import { ReactComponent as SnowIcon } from '../../../assets/weatherIcons/snow.svg';
import { ReactComponent as SleetIcon } from '../../../assets/weatherIcons/sleet.svg';
import { ReactComponent as HazeIcon } from '../../../assets/weatherIcons/haze.svg';
import { ReactComponent as SunnyIcon } from '../../../assets/weatherIcons/sunny.svg';
import { ReactComponent as PartlyCloudyIcon } from '../../../assets/weatherIcons/partly-cloudy.svg';
import { ReactComponent as CloudyIcon } from '../../../assets/weatherIcons/cloudy.svg';

const WeatherIcon: React.FC<{
  conditions: string;
}> = ({ conditions }) => {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  switch (conditions) {
    case 'thunderstorm with light rain':
    case 'thunderstorm with rain':
    case 'thunderstorm with heavy rain':
    case 'light thunderstorm':
    case 'thunderstorm':
    case 'heavy thunderstorm':
    case 'ragged thunderstorm':
    case 'thunderstorm with light drizzle':
    case 'thunderstorm with drizzle':
    case 'thunderstorm with heavy drizzle':
      Icon = ThunderstormIcon;
      break;

    case 'light intensity drizzle':
    case 'drizzle':
    case 'heavy intensity drizzle':
    case 'light intensity drizzle rain':
    case 'drizzle rain':
    case 'heavy intensity drizzle rain':
    case 'shower rain and drizzle':
    case 'heavy shower rain and drizzle':
    case 'shower drizzle':
      Icon = RainIcon;
      break;

    case 'light rain':
    case 'moderate rain':
    case 'light intensity shower rain':
    case 'shower rain':
    case 'freezing rain':
      Icon = RainIcon;
      break;

    case 'heavy intensity rain':
    case 'very heavy rain':
    case 'extreme rain':
    case 'heavy intensity shower rain':
    case 'ragged shower rain':
      Icon = HeavyRainIcon;
      break;

    case 'light snow':
    case 'Snow':
    case 'Heavy snow':
    case 'Light shower sleet':
    case 'Shower sleet':
    case 'Light rain and snow':
    case 'Rain and snow':
    case 'Light shower snow':
    case 'Shower snow':
    case 'Heavy shower snow':
      Icon = SnowIcon;
      break;

    case 'Sleet':
      Icon = SleetIcon;
      break;

    case 'mist':
    case 'Smoke':
    case 'Haze':
    case 'sand/ dust whirls':
    case 'fog':
    case 'sand':
    case 'dust':
    case 'volcanic ash':
    case 'squalls':
    case 'tornado':
      Icon = HazeIcon;
      break;

    case 'clear sky':
      Icon = SunnyIcon;
      break;

    case 'few clouds' || 'few clouds: 11-25%':
    case 'scattered clouds' || 'scattered clouds: 25-50%':
      Icon = PartlyCloudyIcon;
      break;

    case 'broken clouds' || 'broken clouds: 51-84%':
    case 'overcast clouds' || 'overcast clouds: 85-100%':
      Icon = CloudyIcon;
      break;

    default:
      Icon = SunnyIcon;
  }
  return <Icon />;
};

export default WeatherIcon;
