import { Flex, Icon, Text } from "@chakra-ui/react";
import { WiDayCloudy } from "react-icons/wi";

export default function NavBar() {
  return (
    <Flex
      as="nav"
      borderBottom="2px solid gray"
      justifyContent="space-between"
      p={2}
      alignItems="center"
    >
      <Flex alignItems="center" gap={1}>
        <Icon as={WiDayCloudy} boxSize={8}></Icon>
        <Text fontWeight="bold">Weather App</Text>
      </Flex>
    </Flex>
  );
}
