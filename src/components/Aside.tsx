import {
  Box,
  Flex,
  Icon,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { PiMoonDuotone } from "react-icons/pi";
import { MdSunny } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
  onClose: () => void;
}

export default function Aside({ onClose }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Tooltip label="Close" gutter={4}>
        <Box
          position="absolute"
          right="8px"
          cursor="pointer"
          onClick={() => onClose()}
        >
          <Icon as={IoCloseCircleOutline} boxSize="24px" />
        </Box>
      </Tooltip>
      <Flex flexDirection="column" height="100%" justifyContent="space-between">
        <Flex justifyContent="flex-start" gap={2} mt="24px">
          <Text>Theme:</Text>
          <Tooltip label="Change Theme" shouldWrapChildren={true}>
            <Icon
              as={colorMode === "light" ? PiMoonDuotone : MdSunny}
              boxSize={7}
              onClick={toggleColorMode}
              cursor="pointer"
            />
          </Tooltip>
        </Flex>
        <Text textAlign="center" borderTop="1.5px solid gray" pt={2}>
          &copy;2024 Hari Das
        </Text>
      </Flex>
    </>
  );
}
