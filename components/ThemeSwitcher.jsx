import { Switch, useColorMode } from "@chakra-ui/core";

const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Switch id="color-theme" size="lg" color="teal" onChange={toggleColorMode} />
    </>
  );
}

export default ThemeSwitcher;
