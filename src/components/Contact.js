import React from 'react'
import { Container, Icon } from 'semantic-ui-react'
import faker from 'faker'
import Navbar from './NavBar';

const Contact = () => (
    <div style={{ backgroundColor: '#ee5253', textAlign: 'center', paddingTop: '250px', minHeight: '100vh' }}>
        <Container >
            <p> <Icon name='phone square' size='big' />{faker.phone.phoneNumberFormat()}  </p>
            <p><Icon name='mail' size='big' />{faker.internet.email()}</p>
            <p><Icon name='map' size='big' />{faker.address.streetAddress()} {faker.address.country()}</p>
            <Navbar />
        </Container>
    </div>
)

export default Contact;