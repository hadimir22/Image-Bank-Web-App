import React, { Component } from 'react';
import { Grid, Icon, } from 'semantic-ui-react'

class BottonChevron extends Component {
    render() {


        return (

            <Grid.Column width={16} style={{ position: 'absolute', zIndez: '2', textAlign: 'center', marginTop: '500px' }}>
                <a href='#'>   <Icon.Group size='huge'>
                    <Icon loading size='small' color='teal' name='circle notch' />
                    <Icon name='angle down' color='teal' size='tiny' />
                </Icon.Group>
                </a>
            </Grid.Column>




        );
    }
}


export default BottonChevron;