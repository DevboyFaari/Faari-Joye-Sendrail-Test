import React from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box
      p="4"
      display="flex"
      gap="20px"
      justifyContent="center"
      height="90px"
      width="1300px"
    >
      <InputGroup marginLeft="50px" marginTop="10px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          boxShadow="md"
          type="text"
          width="500px"
          placeholder="Search by tracking number or location..."
        />
      </InputGroup>

      <Box
        p="2px 10px"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="52px"
        height="32px"
        bg="#AAAAAA"
        borderRadius="12px"
        marginRight="60px"
        // marginLeft="-50px"
        marginTop="12px"
        gap="2px"
      >
        <BellIcon color="gray.300" boxSize="20px" />3
      </Box>
      <Box
        minWidth="100px"
        display="flex"
        // flexDirection="column"
        alignItems="center"
      >
        <img
          src="./Ellipse 70.png"
          alt="2"
          style={{
            width: "42px",
            height: "42px",
            objectFit: "cover",
            borderRadius: "50%",
            marginLeft: "-50px",
            marginRight: "10px",
            marginTop: "3px",
          }}
        />
        <Box flexDirection="column" display="flex">
          <span
            style={{
              color: "#7C7C88",
              fontFamily: "Gilroy, sans-serif",
              fontSize: "16px",
            }}
          >
            John Tae
          </span>
          <span
            style={{
              color: "#7C7C88",
              fontFamily: "Gilroy, sans-serif",
              fontSize: "12px",
            }}
          >
            Admin
          </span>
          {/* <Box flexDirection="column" justifyContent="center">
            Hello world!
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
