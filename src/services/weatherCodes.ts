import { IconType } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiFog } from "react-icons/wi";
import { WiRainMix } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiRainWind } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiSnowWind } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";

/*
Code	     Description
0	         Clear sky
1, 2, 3	     Mainly clear, partly cloudy, and overcast
45, 48	     Fog and depositing rime fog
51, 53, 55	 Drizzle: Light, moderate, and dense intensity
56, 57	     Freezing Drizzle: Light and dense intensity
61, 63, 65	 Rain: Slight, moderate and heavy intensity
66, 67	     Freezing Rain: Light and heavy intensity
71, 73, 75	 Snow fall: Slight, moderate, and heavy intensity
77	         Snow grains
80, 81, 82	 Rain showers: Slight, moderate, and violent
85, 86	     Snow showers slight and heavy
95 *	     Thunderstorm: Slight or moderate
96, 99 *	 Thunderstorm with slight and heavy hail

(*) Thunderstorm forecast with hail is only available in Central Europe
*/

export interface weatherCodeMap {
  code: number;
  description: string;
  icon: IconType;
}

export function getWeatherCodeMap() {
  return [
    { code: 0, description: "Clear Sky", icon: WiDaySunny },

    { code: 1, description: "Mainly clear", icon: WiCloud },
    { code: 2, description: "Partly Cloudy", icon: WiCloud },
    { code: 3, description: "Overcast", icon: WiCloudy },

    { code: 45, description: "Fog", icon: WiFog },
    { code: 48, description: "Depositing rime fog", icon: WiFog },

    { code: 51, description: "Light Drizzle", icon: WiRainMix },
    { code: 53, description: "Moderate Drizzle", icon: WiRainMix },
    { code: 55, description: "Dense Drizzle", icon: WiRain },

    { code: 56, description: "Light Freezing Drizzle", icon: WiRainMix },
    { code: 57, description: "Dense Freezing Drizzle", icon: WiRain },

    { code: 61, description: "Slight Rain", icon: WiRainMix },
    { code: 63, description: "Moderate Rain", icon: WiRain },
    { code: 65, description: "Heavy Rain", icon: WiRainWind },

    { code: 66, description: "Light Freezing Rain", icon: WiRain },
    { code: 67, description: "Heavy Freezing Rain", icon: WiRainWind },

    { code: 71, description: "Slight Snow Fall", icon: WiSnow },
    { code: 73, description: "Moderate Snow Fall", icon: WiSnow },
    { code: 75, description: "Heavy Snow Fall", icon: WiSnowWind },

    { code: 77, description: "Snow Grains", icon: WiSnow },

    { code: 80, description: "Slight Rain Shower", icon: WiRainMix },
    { code: 81, description: "Moderate Rain Shower", icon: WiRain },
    { code: 82, description: "Violent Rain Shower", icon: WiRainWind },

    { code: 85, description: "Slight Snow Shower", icon: WiSnow },
    { code: 86, description: "Heavy Snow Shower", icon: WiSnowWind },

    { code: 95, description: "Thunderstorm", icon: WiThunderstorm },
    { code: 96, description: "Thunderstorm & Rain", icon: WiThunderstorm },
    { code: 99, description: "Thunderstorm & Rain", icon: WiThunderstorm },
  ] as weatherCodeMap[];
}
