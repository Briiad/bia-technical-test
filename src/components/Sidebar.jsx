import React from 'react'
import './Sidebar.css'
import { FaHome,FaCartPlus } from "react-icons/fa";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <nav>
      <div className='nav-menu'>
          <Link to='/'><FaHome /></Link>
          <Button onClick={onOpen} colorScheme='red'><FaCartPlus /></Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Haloooooooooooo</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </nav>
  )
}

export default Sidebar