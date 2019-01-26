import React, { Component } from 'react'
import { Grid, Loader, Divider, Header, Segment, Dimmer } from 'semantic-ui-react'
import Navbar from './NavBar';
import faker from 'faker'
import axios from 'axios';
import Logo from './Logo';
import './results.css'
import Images from './Images';
import ImagePlaceholder from './ImagePlaceholder';
import Footer from './Footer';


class Results extends Component {
    constructor(props) {
        super(props);

        this.state = { images: [], dimstate: true }

    }




    async  componentDidMount() {
        const { query } = this.props.match.params

        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: query, per_page: 100 },
            headers: {
                Authorization: 'Client-ID 8d50a0bbf2407a181e3ad213d7ae31d70e8ff2b91321f3288bcbe7473e275e4f'
            }
        });

        this.setState({ images: response.data.results, dimstate: false })

    }





    render() {


        return (

            <div id="main">
                <Grid>
                    <Logo />
                </Grid>

                <Grid container id="head">

                    <Grid.Column centered mobile={16} tablet={16} computer={16} >
                        <Divider horizontal><Header size='medium' color='pink'>
                            {this.state.dimstate ? <Loader active inline /> :
                                `found ${this.state.images.length} images`}
                        </Header></Divider>
                    </Grid.Column >
                </Grid>

                <Grid container >


                    <Images images={this.state.images} />


                </Grid>

                <Navbar />




                {this.state.images.length == 0 &&
                    <div id="main">
                        <Grid container >
                            <ImagePlaceholder />
                            <ImagePlaceholder />
                            <ImagePlaceholder />
                            <ImagePlaceholder />
                            <ImagePlaceholder />
                            <ImagePlaceholder />
                            <ImagePlaceholder />
                            <ImagePlaceholder />

                        </Grid>
                    </div>

                }
            </div>

        );
    }
}


export default Results;