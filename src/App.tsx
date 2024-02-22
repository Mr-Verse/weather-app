import { Box, Center, useColorModeValue } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import BodyLayout from "./components/BodyLayout"

function App() {
  const bg = useColorModeValue("gray.300", "gray.800")

  return (
    <>
      <Center p={4}>
        <Box maxWidth={{base:"300px", sm:"400px"}} bg={bg} borderRadius="8px"
          boxShadow="0 0 20px rgba(0,0,0,0.6)">
          <NavBar />
          <BodyLayout />
        </Box>
      </Center>
    </>
  )
}

export default App
