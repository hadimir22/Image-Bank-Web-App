import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import vid from './i1.jpg'
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
                        <Image
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100vh',
                                overflow: 'hidden'

                            }}
                            src={vid}

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