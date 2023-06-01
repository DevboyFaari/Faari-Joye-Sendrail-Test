import * as React from "react";
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from "@chakra-ui/react";
import Landing from "./Landing";
import Header from "./Header";
import { Flex } from "@chakra-ui/react";
import Body from "./Body";

export const App = () => (
  <>
    <Flex>
      <Landing />
      <Header />
    </Flex>
    <Flex justifyContent="center">
      <Body />
    </Flex>
  </>
);
