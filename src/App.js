import React, { Component } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Video from "./components/video";
import Infotext from "./components/Infotxt";
import DevCard from "./components/Card";
import Footer from "./components/Footer";
import ParallaxArea from "./components/Parallax";
import Navbar from "./components/NavBar";
import Results from "./components/Results";
import Contact from "./components/Contact";
import "./app.css";
import Additional from "./components/Additional";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div className="App">
              <Video />
              <Infotext />

              <Grid centered container columns={3}>
                <Additional
                  icon="globe"
                  item="worldwide impact"
                  discript="The world gives testimonial of our service"
                />
                <Additional
                  icon="compass"
                  item="access anywhere"
                  discript="You can access our site anywhere from any device"
                />
                <Additional
                  icon="code"
                  item="awesome code"
                  discript="code is written beautifully and is up to date"
                />
              </Grid>

              <ParallaxArea />

              <div id="team">
                <Header color="black" as="h2" icon textAlign="center">
                  <Icon name="users" circular />
                  <Header.Content>Meet Our Team</Header.Content>
                </Header>

                <Grid centered container columns={3}>
                  <DevCard name="Hadi" discription="Full stack developer" />
                  <DevCard name="Tony Stark" discription="Cloud Admin" />
                  <DevCard name="Jon snow" discription="Security Admin" />
                  <DevCard name="Tyrion " discription="Technical Advisor" />
                </Grid>
              </div>

              <Footer />
              <Navbar />
            </div>
          )}
        />

        <Route path="/results/:query" component={Results} />

        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
