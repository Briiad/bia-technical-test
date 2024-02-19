import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";

const index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://anp.indofoodinternational.com:2864/bdrtny/iorudhtnhgi",
        {
          user_id: username,
          pswd: password,
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .post("https://anp.indofoodinternational.com:2864/bdrtny/iorudhtnhgi", {
    //     user_id: username,
    //     pswd: password,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <>
      <Container maxW="4xl" bg="#fafafa" centerContent>
        <Box padding="4" bg="blue.400" color="black" maxW="2xl">
          <Flex direction="column">
            <p style={{ textAlign: "center" }}>
              There are many benefits to a joint design and development system. Not only does it
              bring benefits to the design team, but it also brings benefits to engineering teams.
              It makes sure that our experiences have a consistent look and feel, not just in our
              design specs, but in production.
            </p>
            <Button bg="#de3633" onClick={onOpen}>
              Open Modal
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl mb={4}>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" onChange={(e) => setUsername(e.target.value)} />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                  </FormControl>
                  <Button colorScheme="blue" w="full" onClick={handleLogin}>
                    Login
                  </Button>
                </ModalBody>

                <ModalFooter>
                  <Button bg="#de3633" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default index;
