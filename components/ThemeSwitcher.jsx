import { Box, Switch, useColorMode } from "@chakra-ui/core";

const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box position="fixed" bottom="4" left="4">
      <Switch id="color-theme" size="lg" color="teal" onChange={toggleColorMode} />
    </Box>
  );
}

export default ThemeSwitcher;
