import { Box, Center } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import BodyLayout from "./components/BodyLayout";

export default function App() {
  return (
    <>
      <Center p={4} height={{base:"100%",md:"100vh"}}>
        <Box
          width={{ base: "300px", sm: "400px" }}
          borderRadius="8px"
          boxShadow="0 0 20px rgba(0,0,0,0.6)"
        >
          <NavBar />
          <BodyLayout />
        </Box>
      </Center>
    </>
  );
}
