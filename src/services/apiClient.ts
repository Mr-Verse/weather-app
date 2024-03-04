import axios from "axios";
import { AxiosError, CanceledError } from "axios";

/*https://api.open-meteo.com/v1/forecast?
latitude=18.6023936&longitude=73.7705984
&current=temperature_2m,relative_humidity_2m,
weather_code,cloud_cover,wind_speed_10m&daily=weather_code,
temperature_2m_max,temperature_2m_min&timezone=auto&past_days=3
*/

export default axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});

export { AxiosError, CanceledError };
