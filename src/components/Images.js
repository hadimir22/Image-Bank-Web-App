import React from 'react'
import { Grid, Image, Reveal } from 'semantic-ui-react'


const Images = (props) => {

    return props.images.map((image) => {

        return (
            <Grid.Column centered mobile={16} tablet={8} computer={8} >
                <Reveal animated='move right'>
                    <Reveal.Content visible>

                        <Image src={image.urls.regular} key={image.id} size='big' rounded />
                    </Reveal.Content>
                    <Reveal.Content hidden>

                        <Image src={image.urls.regular} key={image.id} size='big' rounded />
                    </Reveal.Content>
                </Reveal>


            </Grid.Column >

        )
    })
}






export default Images;