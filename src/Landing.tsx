import React from "react";
import {
  Box,
  Stack,
  Text,
  Link,
  Icon,
  background,
  color,
} from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiTruckLine,
  RiUserLine,
  RiCodeLine,
  RiMoneyDollarCircleLine,
  RiExchangeLine,
  RiSettingsLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

const Landing = () => {
  const navItems = [
    { label: "Dashboard", icon: RiDashboardLine },
    { label: "Shipment", icon: RiTruckLine },
    { label: "Customer", icon: RiUserLine },
    { label: "Courier", icon: RiCodeLine },
    { label: "Payroll", icon: RiMoneyDollarCircleLine },
    { label: "Transactions", icon: RiExchangeLine },
    { label: "Settings", icon: RiSettingsLine },
    { label: "Log Out", icon: RiLogoutBoxLine },
  ];

  return (
    <Box bg="#070529" minH="100vh" w="250px" p="6">
      <Stack spacing="5" align="stretch">
        <Text
          color="#F9C567"
          display="flex"
          padding="10px"
          paddingBottom="24px"
          alignItems="center"
        >
          <img src="./sendrails.png" alt="2" style={{ marginRight: "8px" }} />
          <span style={{ fontWeight: "bold" }}>Sendrail</span>
        </Text>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            color="white"
            fontWeight="500"
            padding="10px"
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "#F9C567" }}
          >
            <Icon as={item.icon} boxSize={5} marginRight="2" />
            <Text>{item.label}</Text>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Landing;
