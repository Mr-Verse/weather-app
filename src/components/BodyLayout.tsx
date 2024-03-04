import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import WeatherStats from "./WeatherStats";
import LocalStats from "./LocalStats";
import WeatherIcon from "./WeatherIcon";
import FutureForecast from "./FutureForecast";
import TodayForecast from "./TodayForecast";
import Aside from "./Aside";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

export default function BodyLayout() {
  const { position, gotLocation, error } = useLocation();
  const [asideIsOpen, setAsideIsOpen] = useState(false);
  const asideWidth = "160px";

  const {
    forecast,
    error: forecastError,
    loading,
  } = useWeather(position.coords?.latitude, position.coords?.longitude);

  return (
    <Box
      height="425px"
      position="relative"
      overflowX="hidden"
      overflowY="hidden"
    >
      <Box
        as="aside"
        position="absolute"
        top="0"
        bottom={0}
        width={asideWidth}
        borderRightRadius="10px"
        boxShadow={asideIsOpen ? "0 0 8px rgba(0,0,0,0.3)" : undefined}
        p="2"
        transform={asideIsOpen ? "translateX()" : "translateX(-100%)"}
        transition="all 0.3s"
      >
        <Aside onClose={() => setAsideIsOpen(false)} />
      </Box>
      {gotLocation && (
        <Box
          as="main"
          height="100%"
          mx={3}
          overflow="auto"
          transform={
            asideIsOpen ? `translateX(${asideWidth})` : "translateX(0)"
          }
          transition="all 0.3s"
          p={1}
          className="hide-scrollbar"
        >
          <WeatherStats
            forecast={forecast}
            loading={loading}
            onMenuBtnClick={() => setAsideIsOpen(!asideIsOpen)}
          />
          <LocalStats
            loading={loading}
            position={position}
            dateTime={
              forecast.current?.time
                ? new Date(forecast.current?.time).toDateString()
                : null
            }
          />
          <WeatherIcon
            loading={loading}
            code={forecast.current?.weather_code}
          />
          <TodayForecast loading={loading} forecast={forecast} />
          {!loading && <FutureForecast forecast={forecast} />}
        </Box>
      )}

      {/* Status messages for Loading */}
      <Box
        position="absolute"
        bottom={0}
        p={1}
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        {!gotLocation && (
          <Box>
            {error === "" ? (
              <Text>Getting your location...</Text>
            ) : (
              <>
                <Text>{`Unable to get Location.`}</Text>
                <Text fontWeight="bold">
                  Error:&nbsp;
                  <Text
                    as="span"
                    color="red.500"
                    fontWeight="normal"
                    fontStyle="italic"
                  >
                    {error}
                  </Text>
                </Text>
                {error === "User denied Geolocation" ? (
                  <Text mt={2}>
                    &#9655; Kindly allow location access for the app to
                    work.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Text>
                ) : null}
              </>
            )}
          </Box>
        )}
        {gotLocation && loading && (
          <Text>Getting weather data from server...</Text>
        )}
        {gotLocation && !loading && forecastError && (
          <Text>{forecastError}</Text>
        )}
      </Box>
    </Box>
  );
}
