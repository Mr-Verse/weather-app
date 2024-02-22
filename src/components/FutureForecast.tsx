import { Heading, List, ListItem } from "@chakra-ui/react";

export default function FutureForecast() {
    return <>
        <Heading fontSize="1.5rem">7 Days Forecast</Heading>
        <List spacing={2}>
            <ListItem>
                Today 
            </ListItem>
            <ListItem>
                Tomorrow
            </ListItem>
            <ListItem>
                Day After...
            </ListItem>
        </List>
    </>
}