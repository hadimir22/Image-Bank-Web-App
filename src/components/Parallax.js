import React from 'react'
import { Container } from 'semantic-ui-react'
import Typing from 'react-typing-animation';
import './infotxt.css'
import { Parallax } from "react-parallax";
import faker from 'faker'


const image1 = "https://i.imgur.com/tStFlXw.png"
const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "20px",
    textAlign: "center",
    color: "#6F1E51",
    transform: "translate(-50%,-50%)"
};

const ParallaxArea = () => (
    <Container>

        <Parallax bgImage={image1} strength={500}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>

                    <Typing >
                        Search any image with Image Bank
                <p>we got {faker.random.number()} Million images </p>
                    </Typing>

                </div>
            </div>
        </Parallax>


    </Container>
)

export default ParallaxArea;