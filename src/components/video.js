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

                <Grid columns={1}>

                    <Grid.Column mobile={16} tablet={16} computer={16} style={{ padding: '0px' }}>
                        <video
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100vh',
                                overflow: 'hidden'

                            }}
                            src={vid}
                            autoPlay
                            loop
                        />
                    </Grid.Column >


                    <Logo />

                    <Type />

                    <SearchBar passedFunction={this.handleData} />


                    <BottonChevron />





                </Grid>



            </div >


        );
    }
}


export default Video;