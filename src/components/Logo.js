import React, { Component } from 'react';
import { Grid, Icon, } from 'semantic-ui-react'

class Logo extends Component {
    render() {


        return (

            <Grid.Column width={16} style={{ position: 'absolute', zIndez: '2', textAlign: 'center', paddingTop: '20px' }}>
                <Icon name='camera retro' size='large' />
                <a href='#'> <strong><h2 style={{ fontSize: '2vw' }}>Image Bank</h2></strong> </a>

            </Grid.Column>




        );
    }
}


export default Logo;