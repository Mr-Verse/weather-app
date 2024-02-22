import { Box } from "@chakra-ui/react";
import { useState } from "react";
import WeatherStats from "./WeatherStats";
import LocalStats from "./LocalStats";
import WeatherIcon from "./WeatherIcon";
import FutureForecast from "./FutureForecast";
import TodayForecast from "./TodayForecast";
import Aside from "./Aside";

export default function BodyLayout() {

    const [asideIsOpen, setAsideIsOpen] = useState(false);
    const hideScrollBarStyle = {
        "-ms-overflow-style": "none", /* IE and Edge */
        "scrollbar-width": "none", /* Firefox */
        "::-webkit-scrollbar": {
            display: "none"
        }
    }
    const asideWidth = "150px"

    return (
        <Box height="425px" position="relative" overflowX="hidden" overflowY="hidden">
            <Box as="aside" position="absolute" bg="orange" zIndex="1"
                top="0" bottom={0} width={asideWidth} p="2"
                transform={asideIsOpen ? "translateX()" : "translateX(-100%)"}
                transition="all 0.3s">
                <Aside />
            </Box>
            <Box as="main"
                height="100%" mx={3}
                overflow="auto"
                transform={asideIsOpen ? `translateX(${asideWidth})` : "translateX(0)"}
                transition="all 0.3s" p={1} sx={hideScrollBarStyle}>
                <WeatherStats onMenuBtnClick={() => setAsideIsOpen(!asideIsOpen)} />
                <LocalStats />
                <WeatherIcon code={96} />
                <TodayForecast />
                <FutureForecast />
            </Box>
        </Box >
    )
}