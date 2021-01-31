import { WeatherInterface } from './weather';
import { ZipCodeFormInterface } from './zipCodeForm';
import { ZipCodesInterface } from './zipCodes';

export interface RootStateInterface {
  weather: WeatherInterface[];
  zipCodeForm: ZipCodeFormInterface;
  zipCodes: ZipCodesInterface[];
}
