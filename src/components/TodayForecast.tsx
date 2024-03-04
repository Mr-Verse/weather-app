import {
  Flex,
  HStack,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import Forecast from "../types/Forecast";
import { LuThermometer } from "react-icons/lu";
import { WiStrongWind } from "react-icons/wi";
import { MdAccessTime } from "react-icons/md";

interface Props {
  loading: boolean;
  forecast: Forecast;
}

export default function TodayForecast({ forecast, loading }: Props) {
  const todayHourlyForecast = forecast.hourly?.time?.filter((el) =>
    el.startsWith(forecast.current?.time?.slice(0, 10))
  );
  const todayHourlyForecastStartIndex = forecast.hourly?.time.findIndex((el) =>
    el.startsWith(forecast.current?.time?.slice(0, 10))
  );

  return (
    <>
      <SkeletonText noOfLines={2} isLoaded={!loading}>
        <Heading fontSize="1.5rem" mt={0}>
          Today's Forecasts
        </Heading>
      </SkeletonText>
      <Skeleton isLoaded={!loading}>
        <Flex
          direction="row"
          height="130px"
          borderRadius="12px"
          my="2"
          mx={0}
          p="2"
          boxShadow="0 0 4px rgba(0,0,0,0.3)"
          overflow="auto"
          gap={2}
          className="hide-scrollbar"
        >
          {!forecast.hourly?.time && <Text>Data not available</Text>}
          {todayHourlyForecast &&
            todayHourlyForecast.map((el, i) => (
              <Flex
                direction="column"
                justifyContent="center"
                key={el}
                height="100%"
                p={2}
                boxShadow="lg"
                border="1px solid gray"
                flexShrink={0}
                borderRadius="10px"
              >
                <HStack spacing={2}>
                  <MdAccessTime />
                  <Text>
                    {forecast.hourly?.time[
                      todayHourlyForecastStartIndex + i
                    ].slice(-5)}
                  </Text>
                </HStack>
                <HStack spacing={2}>
                  <LuThermometer />
                  <Text>
                    {
                      forecast.hourly?.temperature_2m[
                        todayHourlyForecastStartIndex + i
                      ]
                    }
                    &deg;C
                  </Text>
                </HStack>
                <HStack spacing={2}>
                  <WiStrongWind />
                  <Text>
                    {
                      forecast.hourly?.wind_speed_10m[
                        todayHourlyForecastStartIndex + i
                      ]
                    }
                    km/hr
                  </Text>
                </HStack>
              </Flex>
            ))}
        </Flex>
      </Skeleton>
    </>
  );
}
