import React from 'react'
import faker from 'faker'
import { Grid, Icon, Card, Image } from 'semantic-ui-react'
import './footer.css'
import Logo from './Logo'


const Footer = () => (



    <Grid id="bigfoot" centered columns={2}>
        <Grid.Column id="foot1" mobile={16} tablet={8} computer={8} >


            <Logo />
            <p>    <a href='#'>Contact us</a>   </p>
            <p>    <a href='#'>Careers</a></p>
            <p>    <a href='#'>Privacy policy</a></p>
            <p>    <a href='#'>Feedback</a></p>

        </Grid.Column >
        <Grid.Column id="foot2" mobile={16} tablet={8} computer={8} >

            <p>Connect with us</p>

            <a href='#'> <Icon name='facebook square' size='big' /></a>
            <a href='#'> <Icon name='instagram' size='big' /></a>
            <a href='#'> <Icon name='linkedin alternate' size='big' /></a>
            <a href='#'> <Icon name='twitter square' size='big' /></a>
        </Grid.Column >
    </Grid>
)

export default Footer;