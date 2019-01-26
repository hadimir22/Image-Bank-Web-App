import React from 'react'
import { Grid, Card, Placeholder } from 'semantic-ui-react'

const ImagePlaceholder = () => (
    <Grid.Column mobile={16} tablet={8} computer={4} >

        <Card>
            <Card.Content>
                <Placeholder inverted >
                    <Placeholder.Image rectangular centered />
                </Placeholder>
            </Card.Content>
        </Card>

    </Grid.Column >
)

export default ImagePlaceholder;