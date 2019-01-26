import React, { Component } from 'react';
import { Input, Icon, Grid, } from 'semantic-ui-react';
import { Redirect } from 'react-router'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            redirect: false
        }
    }


    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.setState({ redirect: true })

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home' />
        }
    }

    render() {
        return (

            <Grid.Row style={{ position: 'absolute', zIndez: '2', textAlign: 'center', paddingTop: '350px' }}>
                <Grid.Column width={3}>       </Grid.Column>
                <Grid.Column width={10} >
                    <form onSubmit={this.formSubmit} >

                        <Input fluid size='large' onChange={this.onInputChange} value={this.state.term} icon={<Icon name='search' inverted circular link />} placeholder='Cats, Nature ....' />
                    </form>

                    {this.state.redirect && (
                        <Redirect to={{
                            pathname: `/results/:${this.state.term}`
                        }} />
                    )}

                </Grid.Column>

                <Grid.Column width={3}>  </Grid.Column>


            </Grid.Row>



        );
    }
}

export default SearchBar;