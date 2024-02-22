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

import { Center, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { WiStars } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiFog } from "react-icons/wi";
import { WiRainMix } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiRainWind } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiSnowWind } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";

interface Props {
    code: number;
}

export default function WeatherIcon({ code }: Props) {

    const iconMap: { code: number, description: string, icon: IconType }[] = [
        { code: 0, description: "Clear Sky", icon: WiStars },

        { code: 1, description: "Mainly clear", icon: WiCloud },
        { code: 2, description: "Partly Cloudy", icon: WiCloud },
        { code: 3, description: "Overcast", icon: WiCloudy },

        { code: 45, description: "Fog", icon: WiFog },
        { code: 48, description: "", icon: WiFog },

        { code: 51, description: "", icon: WiRainMix },
        { code: 53, description: "", icon: WiRainMix },
        { code: 55, description: "", icon: WiRain },

        { code: 56, description: "", icon: WiRainMix },
        { code: 57, description: "", icon: WiRain },

        { code: 61, description: "", icon: WiRainMix },
        { code: 63, description: "", icon: WiRain },
        { code: 65, description: "", icon: WiRainWind },

        { code: 66, description: "", icon: WiRain },
        { code: 67, description: "", icon: WiRainWind },

        { code: 71, description: "", icon: WiSnow },
        { code: 73, description: "", icon: WiSnow },
        { code: 75, description: "", icon: WiSnowWind },

        { code: 77, description: "", icon: WiSnow },

        { code: 80, description: "", icon: WiRainMix },
        { code: 81, description: "", icon: WiRain },
        { code: 82, description: "", icon: WiRainWind },

        { code: 85, description: "", icon: WiSnow },
        { code: 86, description: "", icon: WiSnowWind },

        { code: 86, description: "", icon: WiSnowWind },
        { code: 86, description: "", icon: WiSnowWind },

        { code: 95, description: "", icon: WiThunderstorm },
        { code: 96, description: "", icon: WiThunderstorm },
        { code: 99, description: "", icon: WiThunderstorm },

    ]

    return <Center p="0" m={3} margin={0}>
        <Icon boxSize={32} as={iconMap.find((iconData) => iconData.code === code)?.icon}
            animation="floating 1s linear infinite alternate"
        >
        </Icon>
    </Center>
}