import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (

            <div style={{ position: "absolute", top: "50%", left: "50%" }}>
                <Input fluid size='large' icon={<Icon name='search' inverted circular link />} placeholder='Cats, Nature ....' />
            </div>
        );
    }
}

export default SearchBar;