import React, { Component } from 'react';
import { Grid, } from 'semantic-ui-react'
import vid from '../components/vid.mp4'
import './video.css'
import SearchBar from './Search';
import Logo from './Logo';
import BottonChevron from './BottonChevron'

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
                                height: '100vh',
                            }}
                            src={vid}
                            autoPlay
                            loop
                        />
                    </Grid.Column >


                    <Logo />

                    <SearchBar />


                    <BottonChevron />





                </Grid>



            </div >


        );
    }
}


export default Video;