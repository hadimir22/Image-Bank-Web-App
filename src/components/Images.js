import React from "react";
import {
  Grid,
  Image,
  Icon,
  Label,
  Reveal,
  Button,
  Header
} from "semantic-ui-react";
import faker from "faker";

const Images = props => {
  return props.images.map(image => {
    return (
      <Grid.Column centered mobile={16} tablet={8} computer={8}>
        <Reveal animated="move right">
          <Reveal.Content visible>
            <Image src={image.urls.regular} key={image.id} size="big" rounded />
          </Reveal.Content>
          <Reveal.Content hidden>
            <div style={{ textAlign: "center", paddingTop: "50px" }}>
              <Header as="h2" inverted>
                Download
              </Header>

              <Button as="div" labelPosition="right">
                <Button color="red">
                  <a
                    href={image.urls.regular}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    {" "}
                    <Icon name="download" />
                    download now
                  </a>
                </Button>
                <Label as="a" basic color="red" pointing="left">
                  {faker.random.number()} downloads
                </Label>
              </Button>
            </div>
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
    );
  });
};

export default Images;
