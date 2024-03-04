interface Current {
  time: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  weather_code: number;
  cloud_cover: number;
  wind_speed_10m: number;
}

interface Daily {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
  wind_speed_10m: number[];
}

export default interface Forecast {
  latitude: number;
  longitude: number;
  current: Current;
  daily: Daily;
  hourly: Hourly;
}
