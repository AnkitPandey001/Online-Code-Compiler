import { Box, Button, Text } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { LANGUAGE_VERSION } from "../constant";

const languages = Object.entries(LANGUAGE_VERSION);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box mt={3} mb={2} ml={5}>
      <Menu>
        <MenuButton as={Button} colorScheme="teal" variant="outline">
          {language}
        </MenuButton>
        <MenuList bg="#2d3748" borderColor="gray.600">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              bg={lang === language ? "teal.600" : "transparent"}
              _hover={{ bg: "teal.700" }}
              onClick={() => onSelect(lang)}
            >
              <Text color="white">{lang}</Text>
              &nbsp;
              <Text as="span" color="gray.400" fontSize="sm">
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
