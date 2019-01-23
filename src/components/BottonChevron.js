import React, { Component } from 'react';
import { Grid, Icon, } from 'semantic-ui-react'

class BottonChevron extends Component {
    render() {


        return (

            <Grid.Column width={16} style={{ position: 'absolute', zIndez: '2', textAlign: 'center', marginTop: '500px' }}>
                <a href='#'>
                    <Icon circular inverted name='angle down' size='large' color='teal' />

                </a>
            </Grid.Column>




        );
    }
}


export default BottonChevron;