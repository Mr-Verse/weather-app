import {
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Forecast from "../types/Forecast";
import { getWeatherCodeMap } from "../services/weatherCodes";

interface Props {
  forecast: Forecast;
}

export default function FutureForecast({ forecast }: Props) {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const today = new Date(date.getTime() - offset * 60 * 1000)
    .toISOString()
    .split("T")[0];
  const startIndex = forecast.daily?.time?.findIndex((el) =>
    el.startsWith(today)
  );

  return (
    <>
      <Heading fontSize="1.5rem" mt={4}>
        7 Days Forecast
      </Heading>
      {!forecast.daily?.time && <Text>No Forecast data available.</Text>}
      <List spacing={2} mt={3}>
        {forecast.daily?.time?.map((el, i) => {
          if (i < startIndex) return undefined;
          return (
            <ListItem key={el}>
              <Flex justifyContent="space-between">
                <Text>{el}</Text>{" "}
                <Tooltip
                  label={
                    getWeatherCodeMap().find(
                      (el) => forecast.daily?.weather_code[i] === el.code
                    )?.description
                  }
                >
                  <span>
                    <Icon
                      as={
                        getWeatherCodeMap().find(
                          (el) => el.code === forecast.daily?.weather_code[i]
                        )?.icon
                      }
                      boxSize="32px"
                    />
                  </span>
                </Tooltip>
                <Text width="15ch" textAlign="end">
                  {forecast.daily?.temperature_2m_min[i]}
                  &deg;C ~ {forecast.daily?.temperature_2m_max[i]}&deg;C
                </Text>
              </Flex>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
