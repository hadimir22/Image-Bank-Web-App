import React, { Component } from 'react';
import { Input, Icon, Grid, } from 'semantic-ui-react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (

            <Grid.Row style={{ position: 'absolute', zIndez: '2', textAlign: 'center', paddingTop: '350px' }}>
                <Grid.Column width={3}>       </Grid.Column>
                <Grid.Column width={10} >
                    <Input fluid size='large' icon={<Icon name='search' inverted circular link />} placeholder='Cats, Nature ....' />
                </Grid.Column>

                <Grid.Column width={3}>       </Grid.Column>
            </Grid.Row>



        );
    }
}

export default SearchBar;