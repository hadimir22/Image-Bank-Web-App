import React, { Component } from 'react';
import { Grid, } from 'semantic-ui-react'
import Typing from 'react-typing-animation';

class Type extends Component {
    render() {


        return (


            <Grid.Row style={{ position: 'absolute', zIndez: '2', textAlign: 'center', paddingTop: '250px', }}>

                <Grid.Column width={16}  >

                    <Typing>
                        <span style={{
                            color: '#1e272e',
                            paddingLeft: '0px',
                            fontSize: '30px'
                        }}> Search Billions of images</span>
                    </Typing>
                </Grid.Column>


            </Grid.Row>





        );
    }
}


export default Type;