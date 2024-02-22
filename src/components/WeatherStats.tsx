import { Box, Flex, Grid, GridItem, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { WiCloud } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

interface Props {
    onMenuBtnClick: () => void;
}

export default function WatherStats({ onMenuBtnClick }: Props) {

    const shadowStrength = useColorModeValue(0.2, 0.7);

    return <>
        <Flex flexDirection="column" mb="3">
            <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" >
                    <Icon as={IoMenu} boxSize={7} onClick={onMenuBtnClick}
                        cursor="pointer" />
                    <Icon as={WiCloud} boxSize={8} />
                    <Text fontFamily="monospace" fontWeight="bold" >75%</Text>
                </Flex>
                <Flex alignItems="center">
                    <Icon as={WiStrongWind} boxSize={8} />
                    <Text fontFamily="monospace" fontWeight="bold" >3km/hr</Text>
                </Flex>
                <Flex alignItems="center">
                    <Icon as={WiHumidity} boxSize={8} />
                    <Text fontFamily="monospace" fontWeight="bold" >80%</Text>
                </Flex>
            </Flex>
            <Box borderRadius="20px" m={2} p={2} shadow={`0 0 6px rgba(0,0,0,${shadowStrength})`}>
                <Grid margin="0 auto" width="fit-content" gridTemplate="48px 32px 32px / 3fr 1fr"
                    position="relative" transform="translateX(20px)"
                    justifyItems="end" alignItems="end">
                    <GridItem gridArea="1/1/4/2" alignSelf="center">
                        <Text fontSize="7rem" textAlign="end">
                            23
                        </Text>
                    </GridItem>
                    <GridItem justifySelf="start" >
                        <Text fontSize="1.5rem">&deg;C</Text>
                    </GridItem>
                    <GridItem>
                        <Text fontSize="1rem">&uarr;5&deg;C</Text>
                    </GridItem>
                    <GridItem alignSelf="start">
                        <Text fontSize="1rem">&darr;4&deg;C</Text>
                    </GridItem>
                </Grid>
                <Text textAlign="center" fontWeight="bold">Mostly Cloudy</Text>
            </Box>
        </Flex>
    </>
}