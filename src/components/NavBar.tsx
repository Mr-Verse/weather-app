import { Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import { WiHorizon } from "react-icons/wi";
import { MdSunny } from "react-icons/md";
import { PiMoonDuotone } from "react-icons/pi";

export default function NavBar() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex as="nav" borderBottom="2px solid gray" justifyContent="space-between"
            p={2} alignItems="center">
            <Flex alignItems="center" >
                <Icon as={WiHorizon} boxSize={8}></Icon>
                <Text fontWeight="bold">Weather App</Text>
            </Flex>
            <Icon as={colorMode === "light" ? PiMoonDuotone : MdSunny} boxSize={7}
                onClick={toggleColorMode} cursor="pointer" />
        </Flex>
    )
}