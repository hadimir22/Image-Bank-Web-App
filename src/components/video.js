import React, { Component } from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react'
import VideoCover from 'react-video-cover';
import vid from '../components/vid.mp4'

import './video.css'

class Video extends Component {
    render() {


        return (
            <div>

                <Grid >
                    <Grid.Column width={16} >
                        <video
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                            src={vid}
                            autoPlay
                            loop
                        />
                    </Grid.Column >


                    <Grid.Column width={16} style={{ position: 'absolute', zIndez: '2', textAlign: 'center', paddingTop: '20px' }}>


                        <Icon name='camera retro' size='large' />
                        <strong><h2 style={{ fontSize: '2vw' }}>Image Bank</h2></strong>

                    </Grid.Column>

                </Grid>



            </div >


        );
    }
}


export default Video;