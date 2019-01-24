import React from 'react'
import faker from 'faker'
import { Grid, Card, Image, Reveal } from 'semantic-ui-react'



const DevCard = (props) => (

    <Grid.Column centered mobile={16} tablet={8} computer={4} >

        <Card style={{ textAlign: 'center' }}>
            <Reveal animated='move right'>
                <Reveal.Content visible>
                    <Image src={faker.image.image()} />
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image src={faker.image.cats()} />
                </Reveal.Content>
            </Reveal>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{faker.hacker.ingverb()}</span>
                </Card.Meta>
                <Card.Description>-{props.discription}-</Card.Description>
            </Card.Content>
        </Card>


    </Grid.Column >
)

export default DevCard

