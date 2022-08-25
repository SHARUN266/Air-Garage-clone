import { AtSignIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function SplitScreen() {
  const { loginUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        loginUser(res.token);
        nav("/talktosales");
      });
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex bg="bg" align={"center"} justify={"center"} flex={1}>
        <Image
          alt={"Login Image"}
          h="50%"
          w="90%"
          src={
            "https://dashboard.airgarage.com/static/media/money_machine.b5d474b0.png"
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <form style={{width:"70%"}}  onSubmit={handleSubmit}  >
        <Stack spacing={4} w={"full"} maxW={"md"} >
          <Heading fontSize={"2xl"}>Sign up for AirGarage</Heading>

          <FormControl id="FirstName">
            <FormLabel>First Name</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FontAwesomeIcon icon={faUserCircle} />}
              />

              <Input type="text" placeholder="Enter First name" />
            </InputGroup>
          </FormControl>

          <FormControl id="LastName">
            <FormLabel>Last Name</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FontAwesomeIcon icon={faUser} />}
              />

              <Input type="text" placeholder="Enter last name" />
            </InputGroup>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AtSignIcon color="black" />}
              />

              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </InputGroup>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="black" />}
              />

              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </InputGroup>
          </FormControl>

          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"color"}>Forgot password?</Link>
            </Stack>
            <Input
              shadow={"lg"}
              color={"color"}
              fontWeight={200}
              bg="bg"
              variant={"solid"}
              _hover={"none"}
              type="submit"
              value={"SUBMIT"}
            />
          </Stack>
        </Stack>
        </form>
      </Flex>
    </Stack>
  );
}
