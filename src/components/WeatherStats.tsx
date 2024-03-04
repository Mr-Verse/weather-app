import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Skeleton,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { WiCloud } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import Forecast from "../types/Forecast";
import { getWeatherCodeMap } from "../services/weatherCodes";

interface Props {
  forecast: Forecast;
  onMenuBtnClick: () => void;
  loading: boolean;
}

export default function WeatherStats({
  forecast,
  onMenuBtnClick,
  loading,
}: Props) {
  const shadowStrength = useColorModeValue(0.2, 0.7);

  return (
    <Flex flexDirection="column" mb="3">
      <Skeleton isLoaded={!loading}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Tooltip label="menu" shouldWrapChildren={true} gutter={4}>
              <Icon
                as={IoMenu}
                boxSize={7}
                onClick={onMenuBtnClick}
                cursor="pointer"
              />
            </Tooltip>
            <Tooltip
              label="Cloud Cover"
              shouldWrapChildren={true}
              gutter={4}
              hasArrow
            >
              <Icon as={WiCloud} boxSize={8} />
            </Tooltip>
            <Text fontFamily="monospace" fontWeight="bold">
              {forecast.current?.cloud_cover
                ? forecast.current?.cloud_cover + "%"
                : "-"}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Tooltip
              label="Wind Speed"
              shouldWrapChildren={true}
              gutter={4}
              hasArrow
            >
              <Icon as={WiStrongWind} boxSize={8} />
            </Tooltip>
            <Text fontFamily="monospace" fontWeight="bold">
              {forecast.current?.wind_speed_10m
                ? forecast.current?.wind_speed_10m + "km/hr"
                : "n.a"}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Tooltip
              label="Humidity"
              shouldWrapChildren={true}
              gutter={4}
              hasArrow
            >
              <Icon as={WiHumidity} boxSize={8} />
            </Tooltip>
            <Text fontFamily="monospace" fontWeight="bold">
              {forecast.current?.relative_humidity_2m
                ? forecast.current?.relative_humidity_2m + "%"
                : "n.a"}
            </Text>
          </Flex>
        </Flex>
      </Skeleton>

      <Box
        borderRadius="20px"
        m={2}
        p={2}
        shadow={`0 0 ${loading ? "0" : "6px"} rgba(0,0,0,${shadowStrength})`}
      >
        <Skeleton isLoaded={!loading}>
          <Grid
            margin="0 auto"
            width="fit-content"
            gridTemplate="48px 32px 32px / 3fr 1fr"
            position="relative"
            transform="translateX(20px)"
            justifyItems="start"
            alignItems="end"
            columnGap={2}
          >
            <GridItem gridArea="1/1/4/2" alignSelf="center">
              <Text fontSize="6rem" textAlign="end">
                {forecast.current?.temperature_2m
                  ? forecast.current?.temperature_2m
                  : "-"}
              </Text>
            </GridItem>
            <GridItem justifySelf="start" alignSelf="end">
              <Text fontSize="1.5rem">&deg;C</Text>
            </GridItem>
            <GridItem>
              <Text fontSize="0.9rem">
                &uarr;
                {forecast.daily?.temperature_2m_max[3] -
                forecast.current?.temperature_2m
                  ? (
                      forecast.daily?.temperature_2m_max[3] -
                      forecast.current?.temperature_2m
                    ).toFixed(1)
                  : "n.a"}
              </Text>
            </GridItem>
            <GridItem alignSelf="start">
              <Text fontSize="0.9rem">
                &darr;
                {forecast.current?.temperature_2m -
                forecast.daily?.temperature_2m_min[3]
                  ? (
                      forecast.current?.temperature_2m -
                      forecast.daily?.temperature_2m_min[3]
                    ).toFixed(1)
                  : "n.a"}
              </Text>
            </GridItem>
          </Grid>
          <Text textAlign="center" fontWeight="bold">
            {forecast.current &&
              String(forecast.current.weather_code) &&
              getWeatherCodeMap().find(
                (weatherCodeData) =>
                  weatherCodeData.code === forecast.current.weather_code
              )?.description}
          </Text>
        </Skeleton>
      </Box>
    </Flex>
  );
}
