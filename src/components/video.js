import React, { Component } from 'react';
import { Grid, } from 'semantic-ui-react'
import vid from '../components/vid.mp4'
import SearchBar from './Search';
import Logo from './Logo';
import BottonChevron from './BottonChevron'
import './video.css'
import Type from './type';

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

                    <Type />

                    <SearchBar />


                    <BottonChevron />





                </Grid>



            </div >


        );
    }
}


export default Video;