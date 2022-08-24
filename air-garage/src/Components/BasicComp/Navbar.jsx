import { ReactNode } from "react";
import {
  Box,
  Flex,
  Menu,
  MenuItem,
  
  useDisclosure,
  useColorModeValue,
 
  
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = ["Find parking", "Login"];
  const Links1 = ["Find parking", "Login", "Talk to sales"];
  const styles = {
    fontFamily: "'Louis george cafe', sans-serif;",
    padding: "20px",
    fontSize: "14px",
  };

  //  fontSize={"14px"}
  //  p="20px"
  //  fontFamily={"'Louis george cafe', sans-serif;"}
  //  fontWeight="bold"
  return (
    <>
      <Box bg="white" m={"auto"} w="90%" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Logo />
          </Box>

          <Flex alignItems={"center"}>
            <IconButton
              size={"md"}
              bg="bg"
              color={"color"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack direction={"row"} spacing={7}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((elem) => (
                  <Box style={styles}>{elem}</Box>
                ))}
                <Box color={styles} fontWeight={"bold"}>
                  Talk to sales
                </Box>
              </HStack>
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Menu as={"nav"} spacing={4}>
              {Links1.map((link) => (
                <MenuItem key={link}>{link}</MenuItem>
              ))}
            </Menu>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
