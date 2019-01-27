import React from 'react'
import { Grid, Card, Icon } from 'semantic-ui-react'



const Additional = (props) => (




    <Grid.Column centered mobile={16} tablet={8} computer={4} >

        <Card style={{ textAlign: 'center', marginBottom: '50px' }}>
            <Card.Content>
                <Card.Header><Icon name={props.icon} size='big' /></Card.Header>
                <Card.Meta>
                    <span className='date'>{props.item}</span>
                </Card.Meta>
                <Card.Description>{props.discript}</Card.Description>
            </Card.Content>
        </Card>


    </Grid.Column >

)

export default Additional

