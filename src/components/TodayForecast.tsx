import { Flex, Heading, Text } from "@chakra-ui/react";

export default function TodayForecast() {
    return <>
        <Heading fontSize="1.5rem" mt={4}>24 hours Forecast</Heading>
        <Flex height="150px" borderRadius="12px" my="2" mx={0} p="2"
            boxShadow="0 0 4px rgba(0,0,0,0.3)"
            overflow="auto" >
            <Text whiteSpace="nowrap">00am 01am 02am 03am 04am 05am 06am 07am 08am 09am 10am 11am 12pm</Text>
        </Flex>
    </>
}