import React from 'react';
import { Container } from 'semantic-ui-react'
import vid from '../components/vid.mp4'
import './video.css'


function Video() {
    return (
        <div>


            <Container fluid id="video">
                <div id="overlay">hi </div>


                <video width="100%" height="100%" autoPlay loop  >
                    <source src={vid} type="video/mp4" />
                </video>

            </Container>


        </div >


    );
}


export default Video;