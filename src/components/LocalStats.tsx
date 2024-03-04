import { Flex, Icon, SkeletonText, Text } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { IoTodayOutline } from "react-icons/io5";

interface Props {
  position: GeolocationPosition;
  loading: boolean;
  dateTime: string | null;
}

export default function LocalStats({ position, loading, dateTime }: Props) {
  return (
    <SkeletonText isLoaded={!loading}>
      <Flex alignItems="center" gap={1} mb={2}>
        <Icon as={IoLocationOutline} boxSize="20px"/>
        <Text>{`Latitude -> ${(position.coords?.latitude).toFixed(
          3
        )}, Longitude -> ${(position.coords?.longitude).toFixed(3)}`}</Text>
      </Flex>
      <Flex alignItems="center" gap={1}>
        <Icon as={IoTodayOutline} boxSize="20px" />
        <Text p={dateTime ? undefined : "1rem"}>{dateTime}</Text>
      </Flex>
    </SkeletonText>
  );
}
