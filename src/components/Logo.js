import React, { Component } from 'react';
import { Grid, Icon, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Logo extends Component {
    render() {


        return (

            <Grid.Column width={16} style={{ position: 'absolute', zIndez: '2', textAlign: 'center', paddingTop: '20px' }}>
                <Icon name='camera retro' size='large' />
                <Link to='/'> <strong><h2 style={{ fontSize: '2vw', color: 'white' }}>Image Bank</h2></strong> </Link>

            </Grid.Column>




        );
    }
}


export default Logo;