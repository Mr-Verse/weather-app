import { Center, Icon, Skeleton } from "@chakra-ui/react";
import { getWeatherCodeMap } from "../services/weatherCodes";
import { WiDaySunny } from "react-icons/wi";

interface Props {
  code: number;
  loading: boolean;
}

export default function WeatherIcon({ code, loading }: Props) {
  const icon = getWeatherCodeMap().find(
    (iconData) => iconData.code === code
  )?.icon;
  const animation = `floating 1s linear infinite alternate ${
    icon === WiDaySunny ? ", rotating 60s linear infinite" : ""
  }`;

  return (
    <Center p="0" m={3} margin={0}>
      <Skeleton
        isLoaded={!loading}
        fitContent={true}
        mt={loading ? "8px" : "0"}
      >
        <Icon boxSize={32} as={icon} animation={animation} />
      </Skeleton>
    </Center>
  );
}
