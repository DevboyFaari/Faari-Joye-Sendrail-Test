/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon, PhoneIcon, ChatIcon } from "@chakra-ui/icons";
import { FaEllipsisV } from "react-icons/fa";

interface Record {
  image: string;
  name: string;
  region: string;
  status: string;
}

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const outlineColor = useColorModeValue("#F9C567", "gray.500");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputGroup flex="1">
      <Input
        type="text"
        placeholder="Search by name"
        onFocus={handleFocus}
        onBlur={handleBlur}
        focusBorderColor={isFocused ? outlineColor : "inherit"}
      />
      <InputRightElement>
        <IconButton
          icon={<SearchIcon color="gray.500" />}
          aria-label="Search"
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  );
};

const Body = () => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products")
      .then((response) => {
        console.log(response.data);
        setRecords(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box marginTop="-540px">
      <span
        style={{
          fontSize: "24px",
          color: "#000000",
          fontFamily: "Gilroy, sans-serif",
          fontWeight: 650,
          lineHeight: "29.4px",
        }}
      >
        Manage Rider
      </span>
      <Box marginTop="67px" marginRight="-165px" display="flex">
        <SearchBar />
        <img
          src="./Vector.png"
          alt="5"
          style={{
            width: "16px",
            height: "16px",
            marginLeft: "10px",
            marginTop: "10px",
            imageRendering: "pixelated",
          }}
        />
        <Button
          bgColor="#070529"
          variant="solid"
          marginLeft="580px"
          marginTop="1px"
        >
          <span style={{ color: "white" }}>Add rider</span>
        </Button>
      </Box>
      <Box
        maxWidth="130%"
        marginTop="38px"
        width="130%"
        height="69px"
        backgroundColor="gray.200"
        borderRadius="10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        fontSize="20px"
        color="#000000"
        fontFamily="Poppins, sans-serif"
        fontWeight="500"
        lineHeight="17px"
        gap="90px"
      >
        <span style={{ marginLeft: "40px" }}>Name</span>
        <span>Region</span>
        <span>Status</span>
        <span>Contact</span>
        <span style={{ marginRight: "40px" }}>Action</span>
      </Box>
      <Box display="flex" flexDirection="column" gap="10px">
        {records.map((data: Record, i: number) => (
          <React.Fragment key={i}>
            <img
              src={data.image}
              alt={data.name}
              style={{
                marginLeft: "40px",
                marginTop: "20px",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                objectFit: "cover",
              }}
            />
            <span
              style={{
                color: "black",
                fontFamily: "Gilroy, sans-serif",
                fontSize: "16px",
                marginTop: "-50px",
                marginLeft: "100px",
                fontWeight: "bold",
              }}
            >
              {data.name}
            </span>

            <span
              style={{
                color: "gray",
                fontSize: "17px",
                marginTop: "-37px",
                marginLeft: "270px",
              }}
            >
              {data.region}
            </span>

            <span
              style={{
                color: data.status === "assigned" ? "green" : "red",
                background: data.status === "assigned" ? "#E6FDEE" : "#FFECEC",
                padding: "4px 8px",
                borderRadius: "4px",
                marginTop: "-30px",
                marginLeft: "460px",
                width: "90px",
                height: "30px",
              }}
            >
              {data.status}
            </span>

            <span
              style={{
                marginTop: "-20px",
                marginLeft: "700px",
              }}
            >
              <PhoneIcon color="#070529" marginRight="20px" />
              <ChatIcon color="#070529" />
            </span>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems="flex-end"
              marginRight="-170px"
              marginTop="-40px"
            >
              <FaEllipsisV
                size={20}
                color="gray.500"
                style={{ cursor: "pointer" }}
              />
            </Box>
            <hr
              style={{
                maxWidth: "200%",
                marginTop: "20px",
                borderTop: "1px solid #e2e8f0",
                width: "130%",
              }}
            />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Body;
