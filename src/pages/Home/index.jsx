import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import './home.css'

const Homepage = () => {
  return (
    <section>
      <Sidebar />
      <div className='container'>
        <Card>
          <CardBody>
            <Text>This is the content</Text>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default Homepage