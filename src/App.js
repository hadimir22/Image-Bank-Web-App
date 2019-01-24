import React, { Component } from 'react';
import { Grid, Container, GridColumn, Header, Icon, } from 'semantic-ui-react'
import Video from './components/video';
import Infotext from './components/Infotxt';
import DevCard from './components/Card';
import Footer from './components/Footer';
import './app.css'
import ParallaxArea from './components/Parallax';
import Navbar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Video />
        <Infotext />

        <ParallaxArea />

        <div id='team'>
          <Header color='black' as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Our Team</Header.Content>
          </Header>

          <Grid centered container columns={3}>
            <DevCard name='Hadi' discription='Full stack developer' />
            <DevCard name='Tony Stark' discription='Cloud Admin' />
            <DevCard name='Jon snow' discription='Security Admin' />
            <DevCard name='Triyon' discription='Technical Advisor' />
          </Grid>
        </div>

        <Footer />
        <Navbar />

      </div>
    );
  }
}

export default App;
