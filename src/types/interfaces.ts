export interface IWeather {
  weather: WeatherElement[];
  main: Main;
}

export interface Main {
  temp: number;
}

export interface WeatherElement {
  id: number;
  main: string;
  description: string;
  icon: string;
}
