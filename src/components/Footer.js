import React from 'react'
import faker from 'faker'
import { Grid, Icon, Header } from 'semantic-ui-react'
import './footer.css'


const Footer = () => (



    <Grid id="bigfoot" centered columns={3}>

        <Grid.Column id="foot1" mobile={16} tablet={8} computer={5} >
            <Header as='h2' icon>
                <Icon name='camera retro' />
                Image bank
    <Header.Subheader>Search Billion images</Header.Subheader>
            </Header>
        </Grid.Column >

        <Grid.Column id="foot3" mobile={16} tablet={8} computer={6} >

            <p>    <a href='#'>Contact us</a>   </p>
            <p>    <a href='#'>Careers</a></p>
            <p>    <a href='#'>Privacy policy</a></p>
            <p>    <a href='#'>Feedback</a></p>

        </Grid.Column >

        <Grid.Column id="foot2" mobile={16} tablet={8} computer={5} >

            <p>Connect with us</p>

            <a href='#'> <Icon name='facebook square' size='big' /></a>
            <a href='#'> <Icon name='instagram' size='big' /></a>
            <a href='#'> <Icon name='linkedin alternate' size='big' /></a>
            <a href='#'> <Icon name='twitter square' size='big' /></a>
        </Grid.Column >

    </Grid>
)

export default Footer;