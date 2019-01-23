import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import './infotxt.css'
import faker from 'faker'

const Infotext = () => (
    <Container>

        <p id="info">
            <Divider />
            <p><strong>This text is generated using faker. Refresh the page to see new text</strong></p>
            {faker.lorem.paragraphs()}
            <Divider />
        </p>
    </Container>
)

export default Infotext;