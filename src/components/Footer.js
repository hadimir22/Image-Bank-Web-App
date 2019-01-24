import React from 'react'
import { Grid, Icon, Header, Button } from 'semantic-ui-react'
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
            <Button circular color='facebook' icon='facebook' />
            <Button circular color='twitter' icon='twitter' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='google plus' icon='google plus' />
        </Grid.Column >

    </Grid>
)

export default Footer;